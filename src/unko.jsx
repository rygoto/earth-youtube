import React, { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

const queries = [
    "場所",
    "飯の量、味",
    "良いメニューなど",
    "雰囲気、空間",
    "営業形態",
    "予約、すぐに入れるか"];
const summaries = [
    "抽出: 外に行列ができる（Ivan Loh）、レストランの内部は巨大（May Bresler Herzog）、場所はとても良い（rudy gelenter）要約: このレストランは人気があり、しばしば外に行列ができる場所にあります。内部は広々としており、多くの客を収容できるようです。",//0
    "抽出: 食べ物はとても美味しい（Ivan Loh）、味は素晴らしい（chirag gahlaut）、カリカリの殻だが少し油っぽい（May Bresler Herzog）、肉の味が強い（rudy gelenter）要約: 食事の味は高く評価されており、特にとんかつの味が素晴らしいとされています。ただし、いくつかのレビューでは油っぽさが指摘されています。",
    "抽出: 3種類の異なるタイプのとんかつ（Ivan Loh）、最高のとんかつ（chirag gahlaut）、シーフードのオプションもあり（Pournami Rajeev）、4種類の豚肉のカット（rudy gelenter）要約: レストランは多様な種類のとんかつを提供しており、特にその品質が高いと評価されています。また、肉を食べない人向けのシーフードオプションもあります。",
    "抽出: レストランの内部は巨大（May Bresler Herzog）要約: レストランの内部は広く、快適な食事空間を提供しているようです。",
    "抽出: サービスは日本の基準では普通（Ivan Loh）、スタッフとサービスも素晴らしい（chirag gahlaut）、サービスがかなり早い（Pournami Rajeev）要約: サービスに関しては意見が分かれていますが、一般的には日本の標準的なサービスが提供されているようです。特に速いサービスが提供されているとのレビューもあります。",
    "抽出: 早めの夕食で3番目の列（Ivan Loh）、かなり早く動く行列（May Bresler Herzog）、午前11時頃に到着し、待ち時間は約5分（Pournami Rajeev) 要約: 行列は存在しますが、比較的速く進むようです。特に早い時間に訪れると、短い待ち時間で入店できる可能性が高いようです。"
];

function QueryText({ query, position, onQuerySelect, index }) {
    return (
        <mesh position={position} onClick={() => onQuerySelect(index)}>
            <Html scaleFactor={10}>
                <div style={{ fontSize: '24px', whiteSpace: 'nowrap' }}>{query}</div>
            </Html>
            <pointLight position={[position[0], position[1] + 2, position[2]]} intensity={1} />
        </mesh>
    );
}

function App() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const radius = 5;

    const handleQuerySelect = index => {
        console.log(summaries[index]); // 選択されたクエリの要約をconsoleに表示
        setSelectedIndex(index); // 選択されたクエリのインデックスを設定
    };

    const queryElements = queries.map((query, index) => {
        const angle = (index / queries.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
            <QueryText
                key={index}
                query={query}
                position={[x, 0, z]}
                onQuerySelect={handleQuerySelect}
                index={index}
            />
        );
    });

    return (
        <Canvas style={{ backgroundColor: 'blue' }}>
            {queryElements}
            {selectedIndex !== null && (
                <Html position={[0, 0, 0]} scaleFactor={10}>
                    <div style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                        {summaries[selectedIndex]}
                    </div>
                </Html>
            )}
        </Canvas>
    );
}

export default App;