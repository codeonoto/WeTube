import axios from 'axios';
import {
  convertRawViewstoString,
  parseVideoDuration,
  timeSince,
} from './index';
import { YOUTUBE_API_URL } from './constants';
import { HomePageVideos } from '../Types';

const API_KEY = import.meta.env.REACT_APP_YOUTUBE_API_KEY;

export const parseData = async (items: any[]): Promise<HomePageVideos[]> => {
  try {
    const videoIds: string[] = [];
    const channelIds: string[] = [];
    items.forEach(
      (item: { snippet: { channelId: string }; id: { videoId: string } }) => {
        channelIds.push(item.snippet.channelId);
        videoIds.push(item.id.videoId);
      }
    );

    const {
      data: { items: channelsData },
    } = await axios.get(
      `${YOUTUBE_API_URL}/channels?part=snippet,contentDetails&id=${channelIds.join(
        ','
      )}&key=${API_KEY}`
    );

    const parsedChannelsData: { id: string; image: string; name: string }[] =
      [];
    channelsData.forEach(
      (channel: {
        id: string;
        snippet: { thumbnails: { default: { url: string } }; title: string };
      }) =>
        parsedChannelsData.push({
          id: channel.id,
          image: channel.snippet.thumbnails.default.url,
          name: channel.snippet.title,
        })
    );

    const {
      data: { items: videosData },
    } = await axios.get(
      `${YOUTUBE_API_URL}/videos?part=contentDetails,statistics&id=${videoIds.join(
        ','
      )}&key=${API_KEY}`
    );

    const parsedData: HomePageVideos[] = [];
    items.forEach(
      (
        item: {
          snippet: {
            channelId: string;
            title: string;
            description: string;
            thumbnails: { medium: { url: string } };
            publishedAt: Date;
            channelTitle: string;
          };
          id: { videoId: string };
        },
        index: number
      ) => {
        const channelData = parsedChannelsData.find(
          (data) => data.id === item.snippet.channelId
        );
        if (channelData) {
          const videoData = videosData[index];
          parsedData.push({
            videoId: item.id.videoId,
            videoTitle: item.snippet.title,
            videoDescription: item.snippet.description,
            videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            videoThumbnail: item.snippet.thumbnails.medium.url,
            videoDuration: parseVideoDuration(
              videoData.contentDetails.duration
            ),
            videoViews: convertRawViewstoString(videoData.statistics.viewCount),
            videoAge: timeSince(new Date(item.snippet.publishedAt)),
            channelInfo: {
              id: channelData.id,
              image: channelData.image,
              name: channelData.name,
            },
          });
        }
      }
    );

    return parsedData;
  } catch (error) {
    console.error('Error parsing data:', error);
    return [];
  }
};
