import express from 'express';
import { google } from 'googleapis';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 3000;

async function fetchVideos(regionCode, videoCategoryId) {
    const youtube = google.youtube({
        version: 'v3',
        auth: 'AIzaSyAttX4v8wYrjQVo2yeqzSXWLBjfrRu3KZY'
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
        const description = item.snippet.description; // 動画の説明を取得
        const url = `https://www.youtube.com/watch?v=${videoId}`;
        //const thumbnail = item.snippet.thumbnails.default.url;
        const thumbnail = item.snippet.thumbnails.high.url;

        // タイトル、URL、および説明をコンソールに出力
        console.log(`Title: ${title}\nURL: ${url}\nDescription: ${description}\n`);

        // タイトル、URL、および説明をオブジェクトにまとめて返す
        return { title, url, description, thumbnail, videoId };
    });
}

app.get('/api/videos', async (req, res) => {
    try {
        const regionCode = req.query.regionCode || 'US';
        const videos = await fetchVideos(regionCode);
        res.json(videos);
    } catch (error) {
        console.error("Error occurred while fetching videos:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
            stack: error.stack
        });
    }
});

app.listen(port, () => { console.log(`Listening on port ${port}`) });
