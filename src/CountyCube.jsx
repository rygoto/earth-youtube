import * as THREE from 'three';

export const cubeCountryData =
    [
        //東アジア 
        { id: "JP", position: new THREE.Vector3(-0.6076, 0.5934, -0.5264), name: "日本", tag: "asia", ename: "Japan" },    //日本
        { id: "KR", position: new THREE.Vector3(-0.4928, 0.5976, -0.6257), name: "韓国", tag: "asia", ename: "Korea" },    //韓国
        //{ id: "CN", position: new THREE.Vector3(-0.3045, 0.7203, -0.6228) },    //中国
        { id: "TW", position: new THREE.Vector3(-0.471997, 0.404761, -0.781526), name: "台湾", tag: "asia", ename: "Taiwan" },    //台湾
        { id: "HK", position: new THREE.Vector3(-0.363409, 0.392849, -0.843914), name: "香港", tag: "asia", ename: "Hongkong" },
        //中央アジア
        { id: "IN", position: new THREE.Vector3(0.1860, 0.3510, -0.9161), name: "インド", tag: "middle", ename: "India" },    //インド
        { id: "RU", position: new THREE.Vector3(0.1894, 0.8973, -0.3938), name: "ロシア", tag: "middle", ename: "Russia" },    //ロシア
        { id: "KZ", position: new THREE.Vector3(0.4838, 0.7136, -0.5039), name: "カザフスタン", tag: "middle", ename: "Kazahsutan" },    //カザフスタン
        { id: "UZ", position: new THREE.Vector3(0.5439, 0.6473, -0.5314), name: "ウズベキスタン", tag: "middle", ename: "Uzbekistan" },    //ウズベキスタン
        //北アメリカ
        { id: "US", position: new THREE.Vector3(-0.159207, 0.635375, 0.755181), name: "アメリカ", tag: "america", ename: "America" },    //アメリカ
        { id: "CA", position: new THREE.Vector3(-0.110040, 0.809703, 0.575856), name: "カナダ", tag: "america", ename: "Canada" },    //カナダ
        { id: "MX", position: new THREE.Vector3(-0.200108, 0.453999, 0.866966), name: "メキシコ", tag: "america", ename: "Mexico" },     //メキシコ 
        //西ヨーロッパ
        { id: "ES", position: new THREE.Vector3(0.7690, 0.6295, 0.0766), name: "スペイン", tag: "west", ename: "Spain" },    //スペイン
        { id: "FR", position: new THREE.Vector3(0.656045, 0.751573, -0.064791), name: "フランス", tag: "west", ename: "France" },    //フランス
        { id: "DE", position: new THREE.Vector3(0.617656, 0.774008, -0.136663), name: "ドイツ", tag: "west", ename: "Germany" },    //ドイツ
        { id: "GB", position: new THREE.Vector3(0.594772, 0.803676, 0.005345), name: "イギリス", tag: "west", ename: "ENgland" },    //イギリス
        { id: "IT", position: new THREE.Vector3(0.730674, 0.655579, -0.185405), name: "イタリア", tag: "west", ename: "Italy" },    //イタリア
        { id: "NL", position: new THREE.Vector3(0.607081, 0.791872, -0.061196), name: "オランダ", tag: "west", ename: "Netherland" },    //オランダ
        { id: "BE", position: new THREE.Vector3(0.629091, 0.775030, -0.055266), name: "ベルギー", tag: "west", ename: "Bergium" },    //ベルギー
        { id: "PT", position: new THREE.Vector3(0.772607, 0.623555, 0.110967), name: "ポルトガル", tag: "west", ename: "Portogul" },    //ポルトガル
    ]
//これ使ってない

export const cubeDataAsia =
    [
        //東アジア 
        { id: "JP", position: new THREE.Vector3(-0.6076, 0.5934, -0.5264), name: "日本", tag: "asia", ename: "Japan" },    //日本
        { id: "KR", position: new THREE.Vector3(-0.4928, 0.5976, -0.6257), name: "韓国", tag: "asia", ename: "Korea" },    //韓国
        //{ id: "CN", position: new THREE.Vector3(-0.3045, 0.7203, -0.6228) },    //中国
        { id: "TW", position: new THREE.Vector3(-0.471997, 0.404761, -0.781526), name: "台湾", tag: "asia", ename: "Taiwan" },    //台湾
        { id: "HK", position: new THREE.Vector3(-0.363409, 0.392849, -0.843914), name: "香港", tag: "asia", ename: "Hongkong" },
        //中央アジア
        { id: "IN", position: new THREE.Vector3(0.1860, 0.3510, -0.9161), name: "インド", tag: "middle", ename: "India" },    //インド
        { id: "RU", position: new THREE.Vector3(0.1894, 0.8973, -0.3938), name: "ロシア", tag: "middle", ename: "Russia" },    //ロシア
        { id: "KZ", position: new THREE.Vector3(0.4838, 0.7136, -0.5039), name: "カザフスタン", tag: "middle", ename: "Kazahsutan" },    //カザフスタン
        { id: "UZ", position: new THREE.Vector3(0.5439, 0.6473, -0.5314), name: "ウズベキスタン", tag: "middle", ename: "Uzbekistan" },    //ウズベキスタン
        //北アメリカ
        { id: "US", position: new THREE.Vector3(-0.159207, 0.635375, 0.755181), name: "アメリカ", tag: "america", ename: "America" },    //アメリカ
        { id: "CA", position: new THREE.Vector3(-0.110040, 0.809703, 0.575856), name: "カナダ", tag: "america", ename: "Canada" },    //カナダ
        { id: "MX", position: new THREE.Vector3(-0.200108, 0.453999, 0.866966), name: "メキシコ", tag: "america", ename: "Mexico" },     //メキシコ 
        //西ヨーロッパ
        { id: "ES", position: new THREE.Vector3(0.7690, 0.6295, 0.0766), name: "スペイン", tag: "west", ename: "Spain" },    //スペイン
        { id: "FR", position: new THREE.Vector3(0.656045, 0.751573, -0.064791), name: "フランス", tag: "west", ename: "France" },    //フランス
        { id: "DE", position: new THREE.Vector3(0.617656, 0.774008, -0.136663), name: "ドイツ", tag: "west", ename: "Germany" },    //ドイツ
        { id: "GB", position: new THREE.Vector3(0.594772, 0.803676, 0.005345), name: "イギリス", tag: "west", ename: "ENgland" },    //イギリス
        { id: "IT", position: new THREE.Vector3(0.730674, 0.655579, -0.185405), name: "イタリア", tag: "west", ename: "Italy" },    //イタリア
        { id: "NL", position: new THREE.Vector3(0.607081, 0.791872, -0.061196), name: "オランダ", tag: "west", ename: "Netherland" },    //オランダ
        { id: "BE", position: new THREE.Vector3(0.629091, 0.775030, -0.055266), name: "ベルギー", tag: "west", ename: "Bergium" },    //ベルギー
        { id: "PT", position: new THREE.Vector3(0.772607, 0.623555, 0.110967), name: "ポルトガル", tag: "west", ename: "Portogul" },    //ポルトガル
        //オセアニア
        { id: "AU", position: new THREE.Vector3(-0.6550, -0.4078, -0.6324), name: "オーストラリア", tag: "west", ename: "Australia" },    //オーストラリア
        { id: "NZ", position: new THREE.Vector3(-0.7327, -0.6686, -0.0936), name: "ニュージーランド", tag: "west", ename: "NewZealand" },    //ニュージーランド
        { id: "PG", position: new THREE.Vector3(-0.7352, 0.0517, -0.6688), name: "パプアニューギニア", tag: "west", ename: "Papua Niugini" },    //パプアニューギニア
        { id: "FJ", position: new THREE.Vector3(-0.9495, -0.2546, -0.1652), name: "フィジー", tag: "west", ename: "Fiji" },    //フィジー
        { id: "SB", position: new THREE.Vector3(-0.8586, -0.0550, -0.4985), name: "ソロモン諸島", tag: "west", ename: "Solomon Islands" },    //ソロモン諸島
        { id: "VU", position: new THREE.Vector3(-0.9284, -0.2611, -0.2450), name: "バヌアツ", tag: "west", ename: "Vanuatu" },    //バヌアツ 

    ]

export const cubeDataAmerica =
    [
        //北アメリカ
        { id: "US", position: new THREE.Vector3(-0.159207, 0.635375, 0.755181), name: "アメリカ", tag: "america", ename: "America" },    //アメリカ
        { id: "CA", position: new THREE.Vector3(-0.110040, 0.809703, 0.575856), name: "カナダ", tag: "america", ename: "Canada" },    //カナダ
        { id: "MX", position: new THREE.Vector3(-0.200108, 0.453999, 0.866966), name: "メキシコ", tag: "america", ename: "Mexico" },     //メキシコ 
    ]

export const cubeDataWest =
    [   //西ヨーロッパ
        { id: "ES", position: new THREE.Vector3(0.7690, 0.6295, 0.0766), name: "スペイン", tag: "west", ename: "Spain" },    //スペイン
        { id: "FR", position: new THREE.Vector3(0.656045, 0.751573, -0.064791), name: "フランス", tag: "west", ename: "France" },    //フランス
        { id: "DE", position: new THREE.Vector3(0.617656, 0.774008, -0.136663), name: "ドイツ", tag: "west", ename: "Germany" },    //ドイツ
        { id: "GB", position: new THREE.Vector3(0.594772, 0.803676, 0.005345), name: "イギリス", tag: "west", ename: "ENgland" },    //イギリス
        { id: "IT", position: new THREE.Vector3(0.730674, 0.655579, -0.185405), name: "イタリア", tag: "west", ename: "Italy" },    //イタリア
        { id: "NL", position: new THREE.Vector3(0.607081, 0.791872, -0.061196), name: "オランダ", tag: "west", ename: "Netherland" },    //オランダ
        { id: "BE", position: new THREE.Vector3(0.629091, 0.775030, -0.055266), name: "ベルギー", tag: "west", ename: "Bergium" },    //ベルギー
        { id: "PT", position: new THREE.Vector3(0.772607, 0.623555, 0.110967), name: "ポルトガル", tag: "west", ename: "Portogul" },    //ポルトガル
    ]

/*export const cubeData = [

    //なんか位置がずれている！！！
    //東アジア 
    { id: "JP", position: new THREE.Vector3(-0.6076, 0.5934, -0.5264), name: "日本", tag: "asia" },    //日本
    { id: "KR", position: new THREE.Vector3(-0.4928, 0.5976, -0.6257), name: "韓国", tag: "asia" },    //韓国
    //{ id: "CN", position: new THREE.Vector3(-0.3045, 0.7203, -0.6228) },    //中国
    { id: "TW", position: new THREE.Vector3(-0.471997, 0.404761, -0.781526), name: "台湾", tag: "asia" },    //台湾
    { id: "HK", position: new THREE.Vector3(-0.363409, 0.392849, -0.843914), name: "香港", tag: "asia" },
    //中央アジア
    { id: "IN", position: new THREE.Vector3(0.1860, 0.3510, -0.9161), name: "インド", tag: "middle" },    //インド
    { id: "RU", position: new THREE.Vector3(0.1894, 0.8973, -0.3938), name: "ロシア", tag: "middle" },    //ロシア
    { id: "KZ", position: new THREE.Vector3(0.4838, 0.7136, -0.5039), name: "カザフスタン", tag: "middle" },    //カザフスタン
    { id: "UZ", position: new THREE.Vector3(0.5439, 0.6473, -0.5314), name: "ウズベキスタン", tag: "middle" },
    //北アメリカ
    { id: "US", position: new THREE.Vector3(-0.159207, 0.635375, 0.755181), name: "アメリカ", tag: "america" },    //アメリカ
    { id: "CA", position: new THREE.Vector3(-0.110040, 0.809703, 0.575856), name: "カナダ", tag: "america" },    //カナダ
    { id: "MX", position: new THREE.Vector3(-0.200108, 0.453999, 0.866966), name: "メキシコ", tag: "america" },     //ウズベキスタン 
*/
/*
export const cubeData = [

    //なんか位置がずれている！！！
    //東アジア 
    { id: "JP", position: new THREE.Vector3(-0.6076, 0.5934, -0.5264), name: "日本",ename: "Japan" },    //日本
    { id: "KR", position: new THREE.Vector3(-0.4928, 0.5976, -0.6257), name: "韓国", ename:"Korea" },    //韓国
    //{ id: "CN", position: new THREE.Vector3(-0.3045, 0.7203, -0.6228) },    //中国
    { id: "TW", position: new THREE.Vector3(-0.471997, 0.404761, -0.781526), name: "台湾",  },    //台湾
    { id: "HK", position: new THREE.Vector3(-0.363409, 0.392849, -0.843914), name: "香港",  },    //香港
    { id: "MN", position: new THREE.Vector3(-0.0437, 0.7681, -0.6354), name: "モンゴル",  },    //モンゴル
    //{ id: "KP", position: new THREE.Vector3(-0.4170, 0.7730, -0.4780) },    //北朝鮮



    //オセアニア
    { id: "AU", position: new THREE.Vector3(-0.6550, -0.4078, -0.6324), name: "オーストラリア", },    //オーストラリア
    { id: "NZ", position: new THREE.Vector3(-0.7327, -0.6686, -0.0936), name: "ニュージーランド",  },    //ニュージーランド
    { id: "PG", position: new THREE.Vector3(-0.7352, 0.0517, -0.6688), name: "パプアニューギニア",  },    //パプアニューギニア
    { id: "FJ", position: new THREE.Vector3(-0.9495, -0.2546, -0.1652), name: "フィジー",  },    //フィジー
    { id: "SB", position: new THREE.Vector3(-0.8586, -0.0550, -0.4985), name: "ソロモン諸島",  },    //ソロモン諸島
    { id: "VU", position: new THREE.Vector3(-0.9284, -0.2611, -0.2450), name: "バヌアツ",  },    //バヌアツ 

    //中央アジア
    { id: "IN", position: new THREE.Vector3(0.1860, 0.3510, -0.9161), name: "インド",  },    //インド
    { id: "RU", position: new THREE.Vector3(0.1894, 0.8973, -0.3938), name: "ロシア",  },    //ロシア
    { id: "KZ", position: new THREE.Vector3(0.4838, 0.7136, -0.5039), name: "カザフスタン",  },    //カザフスタン
    { id: "UZ", position: new THREE.Vector3(0.5439, 0.6473, -0.5314), name: "ウズベキスタン", },    //ウズベキスタン 

    //東南アジア    
    { id: "ID", position: new THREE.Vector3(-0.294218, -0.108099, -0.949106), name: "インドネシア",  },    //インドネシア
    { id: "MY", position: new THREE.Vector3(-0.217235, 0.025037, -1.024560), name: "マレーシア", },    //マレーシア
    { id: "VN", position: new THREE.Vector3(-0.3076, 0.2494, -0.9124), name: "ベトナム", },    //ベトナム
    { id: "TH", position: new THREE.Vector3(-0.1426, 0.2619, -0.9499), name: "タイ", },    //タイ
    { id: "PH", position: new THREE.Vector3(-0.523042, 0.230186, -0.819414), name: "フィリピン",  },    //フィリピン
    { id: "SG", position: new THREE.Vector3(-0.237775, 0.025821, -0.969441), name: "シンガポール",  },    //シンガポール 
    { id: "MM", position: new THREE.Vector3(-0.091508, 0.332676, -0.938441), name: "ミャンマー",  },    //ミャンマー
    { id: "KH", position: new THREE.Vector3(-0.233719, 0.229599, -0.943346), name: "カンボジア",  },    //カンボジア
    { id: "LA", position: new THREE.Vector3(-0.235042, 0.293347, -0.925400), name: "ラオス", },    //ラオス
    //{ id: "BN", position: new THREE.Vector3(-0.2500, 0.2000, -0.9500), name: "ブルネイ" },    //ブルネイ
    //{ id: "TL", position: new THREE.Vector3(-0.2500, 0.2000, -0.9500), name: "東ティモール" },    //東ティモール
    //{ id: "MV", position: new THREE.Vector3(-0.2500, 0.2000, -0.9500), name: "モルディブ" },    //モルディブ

    //北アメリカ
    { id: "US", position: new THREE.Vector3(-0.159207, 0.635375, 0.755181), name: "アメリカ", tag: america },    //アメリカ
    { id: "CA", position: new THREE.Vector3(-0.110040, 0.809703, 0.575856), name: "カナダ", tag: america },    //カナダ
    { id: "MX", position: new THREE.Vector3(-0.200108, 0.453999, 0.866966), name: "メキシコ", tag: america },    //メキシコ
    { id: "CU", position: new THREE.Vector3(0.183137, 0.401474, 0.896825), name: "キューバ", tag: america },    //キューバ
    { id: "GT", position: new THREE.Vector3(-0.011698, 0.222285, 0.974104), name: "グアテマラ", tag: america },    //グアテマラ

    //南アメリカ
    { id: "BR", position: new THREE.Vector3(0.7138, -0.1535, 0.6784), name: "ブラジル", tag: america },    //ブラジル
    { id: "AR", position: new THREE.Vector3(0.430771, -0.556996, 0.708854), name: "アルゼンチン", tag: america },    //アルゼンチン
    { id: "CL", position: new THREE.Vector3(0.264963, -0.570043, 0.776410), name: "チリ", tag: america },    //チリ
    { id: "CO", position: new THREE.Vector3(0.268651, 0.024216, 0.961747), name: "コロンビア", tag: america },    //コロンビア
    { id: "PE", position: new THREE.Vector3(0.308959, -0.277699, 0.908275), name: "ペルー", tag: america },    //ペルー
    { id: "VE", position: new THREE.Vector3(0.403271, 0.147605, 0.902016), name: "ベネズエラ", tag: america },    //ベネズエラ
    //{ id: "EC", position: new THREE.Vector3(0.350000, -0.100000, 0.930000), name: "エクアドル" },    //エクアドル

    //西ヨーロッパ
    { id: "ES", position: new THREE.Vector3(0.7690, 0.6295, 0.0766), name: "スペイン", tag: west },    //スペイン
    { id: "FR", position: new THREE.Vector3(0.656045, 0.751573, -0.064791), name: "フランス", tag: west },    //フランス
    { id: "DE", position: new THREE.Vector3(0.617656, 0.774008, -0.136663), name: "ドイツ", tag: west },    //ドイツ
    { id: "GB", position: new THREE.Vector3(0.594772, 0.803676, 0.005345), name: "イギリス", tag: west },    //イギリス
    { id: "IT", position: new THREE.Vector3(0.730674, 0.655579, -0.185405), name: "イタリア", tag: west },    //イタリア
    { id: "NL", position: new THREE.Vector3(0.607081, 0.791872, -0.061196), name: "オランダ", tag: west },    //オランダ
    { id: "BE", position: new THREE.Vector3(0.629091, 0.775030, -0.055266), name: "ベルギー", tag: west },    //ベルギー
    { id: "PT", position: new THREE.Vector3(0.772607, 0.623555, 0.110967), name: "ポルトガル", tag: west },    //ポルトガル
    { id: "IE", position: new THREE.Vector3(0.593732, 0.799493, 0.084720), name: "アイルランド", tag: west },    //アイルランド
    { id: "LU", position: new THREE.Vector3(0.625776, 0.772778, -0.101517), name: "ルクセンブルク", tag: west },    //ルクセンブルク
    { id: "CH", position: new THREE.Vector3(0.668963, 0.735579, -0.099931), name: "スイス", tag: west },    //スイス
    { id: "AT", position: new THREE.Vector3(0.652602, 0.740373, -0.157675), name: "オーストリア", tag: west },    //オーストリア
    { id: "DK", position: new THREE.Vector3(0.562791, 0.820940, -0.089519), name: "デンマーク", tag: west },    //デンマーク
    { id: "SE", position: new THREE.Vector3(0.481191, 0.861870, -0.157675), name: "スウェーデン", tag: west },    //スウェーデン
    { id: "NO", position: new THREE.Vector3(0.482579, 0.872191, -0.072431), name: "ノルウェー", tag: west },    //ノルウェー
    { id: "FI", position: new THREE.Vector3(0.433566, 0.877954, -0.200874), name: "フィンランド", tag: west },    //フィンランド
    { id: "IS", position: new THREE.Vector3(0.403444, 0.905379, 0.130753), name: "アイスランド", tag: west },    //アイスランド
    //{ id: "CY", position: new THREE.Vector3(0.719970, 0.631183, -0.287031), name: "キプロス" },    //キプロス
    //{ id: "MT", position: new THREE.Vector3(0.719970, 0.631183, -0.287031), name: "マルタ" },    //マルタ
    //{ id: "LI", position: new THREE.Vector3(0.719970, 0.631183, -0.287031), name: "リヒテンシュタイン" },    //リヒテンシュタイン
    //{ id: "MC", position: new THREE.Vector3(0.719970, 0.631183, -0.287031), name: "モナコ" },    //モナコ
    //{ id: "AD", position: new THREE.Vector3(0.719970, 0.631183, -0.287031), name: "アンドラ" },    //アンドラ
    //{ id: "SM", position: new THREE.Vector3(0.719970, 0.631183, -0.287031), name: "サンマリノ" },    //サンマリノ

    //東ヨーロッパ
    { id: "UA", position: new THREE.Vector3(0.567645, 0.750518, -0.336095), name: "ウクライナ", tag: west },    //ウクライナ
    { id: "PL", position: new THREE.Vector3(0.581192, 0.784812, -0.211664), name: "ポーランド", tag: west },    //ポーランド
    { id: "CZ", position: new THREE.Vector3(0.636481, 0.746885, -0.191266), name: "チェコ", tag: west },    //チェコ
    { id: "HU", position: new THREE.Vector3(0.639323, 0.736105, -0.219308), name: "ハンガリー", tag: west },    //ハンガリー
    //{ id: "BY", position: new THREE.Vector3(0.618000, 0.759000, -0.204000), name: "ベラルーシ" },    //ベラルーシ
    { id: "RO", position: new THREE.Vector3(0.605065, 0.730503, -0.315137), name: "ルーマニア", tag: west },    //ルーマニア
    //{ id: "BG", position: new THREE.Vector3(0.648000, 0.730000, -0.225000), name: "ブルガリア" },    //ブルガリア
    { id: "GR", position: new THREE.Vector3(0.719970, 0.631183, -0.287031), name: "ギリシャ", tag: west },    //ギリシャ
    //{ id: "HR", position: new THREE.Vector3(0.642000, 0.718000, -0.271000), name: "クロアチア" },    //クロアチア
    { id: "RS", position: new THREE.Vector3(0.681269, 0.674897, -0.283062), name: "セルビア", tag: west },    //セルビア
    { id: "BA", position: new THREE.Vector3(0.682320, 0.690758, -0.235587), name: "ボスニア・ヘルツェゴビナ", tag: west },//ボスニア・ヘルツェゴビナ
    //{ id: "TR", position: new THREE.Vector3(0.666258, 0.626605, -0.402023), name: "トルコ" },    //トルコ
    //{ id: "MK", position: new THREE.Vector3(0.692000, 0.670000, -0.270000), name: "マケドニア" },    //マケドニア
    //{ id: "MD", position: new THREE.Vector3(0.601000, 0.710000, -0.370000), name: "モルドバ" },    //モルドバ
    //{ id: "SK", position: new THREE.Vector3(0.636000, 0.730000, -0.270000), name: "スロバキア" },    //スロバキア
    //{ id: "SI", position: new THREE.Vector3(0.648000, 0.730000, -0.225000), name: "スロベニア" },    //スロベニア


    //中東
    { id: "SA", position: new THREE.Vector3(0.6523, 0.4796, -0.5807), name: "サウジアラビア", tag: middle },    //サウジアラビア
    { id: "AE", position: new THREE.Vector3(0.5166, 0.4213, -0.7418), name: "アラブ首長国連邦", tag: middle },    //アラブ首長国連邦
    { id: "IL", position: new THREE.Vector3(0.6835, 0.5044, -0.5194), name: "イスラエル", tag: middle },    //イスラエル 
    { id: "TR", position: new THREE.Vector3(0.6225, 0.6345, -0.4537), name: "トルコ", tag: middle },    //トルコ
    { id: "IR", position: new THREE.Vector3(0.4019, 0.5389, -0.7346), name: "イラン", tag: middle },    //イラン
    { id: "IQ", position: new THREE.Vector3(0.7138, 0.5191, -0.4659), name: "イラク", tag: middle },    //イラク 
    { id: "SY", position: new THREE.Vector3(0.645640, 0.558567, -0.520022), name: "シリア", tag: middle },    //シリア
    //{ id: "PS", position: new THREE.Vector3(0.6415, 0.5419, -0.5339), name: "パレスチナ" },    //パレスチナ
    { id: "JO", position: new THREE.Vector3(0.663103, 0.527659, -0.529650), name: "ヨルダン", tag: middle },    //ヨルダン
    { id: "LB", position: new THREE.Vector3(0.665766, 0.558855, -0.492547), name: "レバノン", tag: middle },    //レバノン
    { id: "OM", position: new THREE.Vector3(0.517251, 0.348072, -0.781345), name: "オマーン", tag: middle },    //オマーン
    { id: "QA", position: new THREE.Vector3(0.565251, 0.429344, -0.703780), name: "カタール", tag: middle },    //カタール
    { id: "KW", position: new THREE.Vector3(0.591957, 0.490917, -0.637397), name: "クウェート", tag: middle },    //クウェート
    { id: "BH", position: new THREE.Vector3(0.570575, 0.442616, -0.691211), name: "バーレーン", tag: middle },    //バーレーン
    //{ id: "YE", position: new THREE.Vector3(0.4775, 0.4075, -0.7800), name: "イエメン" },    //イエメン
    { id: "AF", position: new THREE.Vector3(0.276305, 0.541540, -0.792589), name: "アフガニスタン", tag: middle },    //アフガニスタン
    { id: "PK", position: new THREE.Vector3(0.320521, 0.508672, -0.798463), name: "パキスタン", tag: middle },    //パキスタン
    { id: "AZ", position: new THREE.Vector3(0.494418, 0.652560, -0.572773), name: "アゼルバイジャン", tag: middle },    //アゼルバイジャン
    { id: "AM", position: new THREE.Vector3(0.556402, 0.629128, -0.541898), name: "アルメニア", tag: middle },    //アルメニア
    { id: "GE", position: new THREE.Vector3(0.544623, 0.670377, -0.502618), name: "グルジア", tag: middle },    //グルジア


    //アフリカ
    //{ id: "CD", position: new THREE.Vector3(0.8574, 0.0141, -0.5054) ,name:""},    //コンゴ民主共和国
    { id: "ZA", position: new THREE.Vector3(0.7561, -0.4535, -0.4650), name: "南アフリカ共和国", tag: west },    //南アフリカ共和国
    { id: "EG", position: new THREE.Vector3(0.6612, 0.5072, -0.5439), name: "エジプト", tag: west },    //エジプト
    { id: "MA", position: new THREE.Vector3(0.8181, 0.5718, 0.0123), name: "モロッコ ", tag: west },    //モロッコ 
    { id: "NG", position: new THREE.Vector3(0.9740, 0.1011, -0.1990), name: "ナイジェリア", tag: west },    //ナイジェリア
    { id: "KE", position: new THREE.Vector3(0.5777, -0.0191, -0.7610), name: "ケニア", tag: west },    //ケニア 
    { id: "ET", position: new THREE.Vector3(0.765268, 0.125853, -0.630668), name: "エチオピア", tag: west },    //エチオピア
    { id: "GH", position: new THREE.Vector3(0.988274, 0.145232, 0.022128), name: "ガーナ", tag: west },    //ガーナ
    { id: "TN", position: new THREE.Vector3(0.812123, 0.567158, -0.129379), name: "チュニジア", tag: west },    //チュニジア
    //{ id: "CI", position: new THREE.Vector3(0.9740, 0.1011, -0.1990), name: "コートジボワール" },    //コートジボワール
    { id: "MG", position: new THREE.Vector3(0.652447, -0.355527, -0.668159), name: "マダガスカル", tag: west },    //マダガスカル
];
*/