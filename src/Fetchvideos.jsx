import { google } from 'googleapis';

export async function fetchVideo(regionCode) {
    const api_key = 'AIzaSyAttX4v8wYrjQVo2yeqzSXWLBjfrRu3KZY';

    const youtube = google.youtube({
        version: 'v3',
        auth: api_key,
    });

    const res = await youtube.videos.list({
        part: 'snippet',
        chart: 'mostPopular',
        regionCode: regionCode,
        videoCategoryId: 10,
    });

    const items = res.data.items;
    if (items.length === 0) {
        console.log('No data found.');
        return null;
    } else {
        console.log('Most popular videos: ');
        const videos = items.map((item) => {
            const title = item.snippet.title;
            const video_id = item.id;
            const description = item.snippet.description; // 動画の説明を取得
            const url = `https://www.youtube.com/watch?v=${video_id}`;

            // タイトル、URL、および説明をコンソールに出力
            console.log(`Title: ${title}\nURL: ${url}\nDescription: ${description}\n`);

            // タイトル、URL、および説明をオブジェクトにまとめて返す
            return { title, url, description };
        });


        return videos;

    };
}