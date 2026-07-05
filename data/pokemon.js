// data/pokemon.js
// Pokémon Champions ダメージ計算機
// ポケモンデータ
// タイプは内部処理用に英語で管理する

const POKEMON = [

    {
        id: 25,
        name: "ピカチュウ",
        form: "",
        types: ["electric"],

        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },

        abilities: [
            "せいでんき",
            "ひらいしん"
        ]
    },

    {
        id: 3,
        name: "フシギバナ",
        form: "",
        types: ["grass", "poison"],

        baseStats: {
            hp: 80,
            atk: 82,
            def: 83,
            spa: 100,
            spd: 100,
            spe: 80
        },

        abilities: [
            "しんりょく",
            "ようりょくそ"
        ]
    },

    {
        id: 6,
        name: "リザードン",
        form: "",
        types: ["fire", "flying"],

        baseStats: {
            hp: 78,
            atk: 84,
            def: 78,
            spa: 109,
            spd: 85,
            spe: 100
        },

        abilities: [
            "もうか",
            "サンパワー"
        ]
    },

    {
        id: 9,
        name: "カメックス",
        form: "",
        types: ["water"],

        baseStats: {
            hp: 79,
            atk: 83,
            def: 100,
            spa: 85,
            spd: 105,
            spe: 78
        },

        abilities: [
            "げきりゅう",
            "あめうけざら"
        ]
    }

];
