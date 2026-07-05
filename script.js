// script.js
// Pokémon Champions ダメージ計算機

console.log("script.js 読み込みOK");

document.addEventListener("DOMContentLoaded", () => {

    // ========= 要素 =========

    const attackerPokemon = document.getElementById("attackerPokemon");
    const defenderPokemon = document.getElementById("defenderPokemon");

    const attackerAbility = document.getElementById("attackerAbility");
    const defenderAbility = document.getElementById("defenderAbility");

    const moveSelect = document.getElementById("move");

    const calculateButton = document.getElementById("calculateButton");
    const result = document.getElementById("result");

    // ========= ポケモン読込 =========

    function loadPokemon() {

        POKEMON.forEach(pokemon => {

            const atkOption = document.createElement("option");
            atkOption.value = pokemon.id;
            atkOption.textContent = pokemon.name;
            attackerPokemon.appendChild(atkOption);

            const defOption = document.createElement("option");
            defOption.value = pokemon.id;
            defOption.textContent = pokemon.name;
            defenderPokemon.appendChild(defOption);

        });

    }

    // ========= 技読込 =========

    function loadMoves() {

        MOVES.forEach(move => {

            const option = document.createElement("option");

            option.value = move.id;
            option.textContent = move.name;

            moveSelect.appendChild(option);

        });

    }

    // ========= 特性読込 =========

    function loadAbilities(select, pokemonId) {

        select.innerHTML = "";

        const pokemon = POKEMON.find(p => p.id == pokemonId);

        if (!pokemon) {

            const option = document.createElement("option");
            option.textContent = "選択してください";
            select.appendChild(option);

            return;

        }

        pokemon.abilities.forEach(ability => {

            const option = document.createElement("option");

            option.value = ability;
            option.textContent = ability;

            select.appendChild(option);

        });

    }

    // ========= ポケモン変更 =========

    attackerPokemon.addEventListener("change", () => {

        loadAbilities(attackerAbility, attackerPokemon.value);

    });

    defenderPokemon.addEventListener("change", () => {

        loadAbilities(defenderAbility, defenderPokemon.value);

    });

    // ========= ダメージ計算（仮） =========

    calculateButton.addEventListener("click", () => {

        const atkPokemon = POKEMON.find(p => p.id == attackerPokemon.value);
        const defPokemon = POKEMON.find(p => p.id == defenderPokemon.value);
        const move = MOVES.find(m => m.id == moveSelect.value);

        if (!atkPokemon || !defPokemon || !move) {

            result.innerHTML =
                "<span style='color:red;'>必要な項目を選択してください。</span>";

            return;

        }

        result.innerHTML = `
            <b>攻撃側</b>：${atkPokemon.name}<br>
            <b>防御側</b>：${defPokemon.name}<br>
            <b>技</b>：${move.name}<br><br>

            <b>威力</b>：${move.power}<br>
            <b>タイプ</b>：${TYPE_NAMES[move.type]}<br>
            <b>分類</b>：${move.category}<br><br>

            ダメージ計算は次のバージョンで実装します。
        `;

    });

    // ========= 初期化 =========

    loadPokemon();
    loadMoves();

});
