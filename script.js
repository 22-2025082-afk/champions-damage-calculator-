// Pokémon Champions ダメージ計算機
// Version 1.0

console.log("JS読み込みOK");

document.addEventListener("DOMContentLoaded", () => {

    const calculateButton = document.getElementById("calculateButton");
    const result = document.getElementById("result");

    const attackerPokemon = document.getElementById("attackerPokemon");
    const defenderPokemon = document.getElementById("defenderPokemon");
    const move = document.getElementById("move");

    // 仮データ（後で data フォルダのデータに置き換える）
    const pokemonList = [
        "ピカチュウ",
        "リザードン",
        "ガブリアス",
        "サーフゴー",
        "カイリュー"
    ];

    const moveList = [
        "10まんボルト",
        "かえんほうしゃ",
        "じしん",
        "りゅうせいぐん",
        "シャドーボール"
    ];

    function loadPokemon() {

        pokemonList.forEach(name => {

            const option1 = document.createElement("option");
            option1.value = name;
            option1.textContent = name;
            attackerPokemon.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = name;
            option2.textContent = name;
            defenderPokemon.appendChild(option2);

        });

    }

    function loadMoves() {

        moveList.forEach(name => {

            const option = document.createElement("option");
            option.value = name;
            option.textContent = name;
            move.appendChild(option);

        });

    }

    calculateButton.addEventListener("click", () => {

        if (
            attackerPokemon.value === "" ||
            defenderPokemon.value === "" ||
            move.value === ""
        ) {
            result.innerHTML =
                "<span style='color:red'>攻撃側・防御側・技を選択してください。</span>";
            return;
        }

        result.innerHTML = `
            <strong>攻撃側：</strong> ${attackerPokemon.value}<br>
            <strong>防御側：</strong> ${defenderPokemon.value}<br>
            <strong>技：</strong> ${move.value}<br><br>

            <strong>※まだダメージ計算は未実装です。</strong>
        `;

    });

    loadPokemon();
    loadMoves();

});
