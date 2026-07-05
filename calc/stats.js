// calc/stats.js
// Pokémon Champions 能力値計算

/**
 * HPを計算
 * HP = 種族値 + 75 + 能力ポイント
 *
 * @param {number} base HP種族値
 * @param {number} points 能力ポイント(0～32)
 * @returns {number}
 */
function calcHP(base, points) {
    return base + 75 + points;
}

/**
 * HP以外を計算
 * ⌊(種族値 + 20 + 能力ポイント) × 性格補正⌋
 *
 * @param {number} base 種族値
 * @param {number} points 能力ポイント(0～32)
 * @param {number} nature 0.9 / 1.0 / 1.1
 * @returns {number}
 */
function calcStat(base, points, nature = 1.0) {
    return Math.floor((base + 20 + points) * nature);
}

/**
 * ポケモン1体の実数値を計算
 *
 * @param {Object} pokemon pokemon.jsのデータ
 * @param {Object} points
 * @param {Object} nature
 * @returns {Object}
 */
function calculateStats(pokemon, points, nature) {

    return {

        hp: calcHP(
            pokemon.baseStats.hp,
            points.hp
        ),

        atk: calcStat(
            pokemon.baseStats.atk,
            points.atk,
            nature.atk
        ),

        def: calcStat(
            pokemon.baseStats.def,
            points.def,
            nature.def
        ),

        spa: calcStat(
            pokemon.baseStats.spa,
            points.spa,
            nature.spa
        ),

        spd: calcStat(
            pokemon.baseStats.spd,
            points.spd,
            nature.spd
        ),

        spe: calcStat(
            pokemon.baseStats.spe,
            points.spe,
            nature.spe
        )

    };

}
