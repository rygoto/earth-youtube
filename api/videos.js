import { google } from 'googleapis';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { regionCode = 'US', videoCategoryId } = req.query;

  try {
    const videos = await fetchVideos(regionCode, videoCategoryId);
    res.status(200).json(videos);
  } catch (error) {
    console.error("Error occurred while fetching videos:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      stack: error.stack
    });
  }
}

async function fetchVideos(regionCode, videoCategoryId) {
  const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY
  });

  const response = await youtube.videos.list({
    part: 'snippet',
    chart: 'mostPopular',
    regionCode: regionCode,
    videoCategoryId: videoCategoryId,
  });

  return response.data.items.slice(0, 3).map((item) => {
    const title = item.snippet.title;
    const videoId = item.id;
    const description = item.snippet.description;
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    const thumbnail = item.snippet.thumbnails.high.url;

    console.log(`Title: ${title}\nURL: ${url}\nDescription: ${description}\n`);

    return { title, url, description, thumbnail, videoId };
  });
}