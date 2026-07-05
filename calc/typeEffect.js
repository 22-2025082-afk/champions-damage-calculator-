// calc/typeEffect.js
// タイプ相性計算

/**
 * 攻撃タイプ1つと防御タイプ1つの倍率を返す
 *
 * @param {string} attackType
 * @param {string} defendType
 * @returns {number}
 */
function getSingleTypeEffectiveness(attackType, defendType) {

    const attackData = TYPE_CHART[attackType];

    if (!attackData) {
        return 1;
    }

    if (attackData[defendType] === undefined) {
        return 1;
    }

    return attackData[defendType];

}

/**
 * 防御側が単タイプ・複合タイプどちらでも対応
 *
 * @param {string} attackType
 * @param {string[]} defendTypes
 * @returns {number}
 */
function getTypeEffectiveness(attackType, defendTypes) {

    let multiplier = 1;

    for (const type of defendTypes) {
        if (!type) continue;

        multiplier *= getSingleTypeEffectiveness(
            attackType,
            type
        );
    }

    return multiplier;

}

/**
 * 倍率を表示用文字列に変換
 *
 * @param {number} multiplier
 * @returns {string}
 */
function getEffectivenessText(multiplier) {

    switch (multiplier) {

        case 0:
            return "こうかがないみたいだ…";

        case 0.25:
            return "こうかはいまひとつ (1/4)";

        case 0.5:
            return "こうかはいまひとつ (1/2)";

        case 1:
            return "等倍";

        case 2:
            return "こうかはばつぐんだ！";

        case 4:
            return "こうかはばつぐんだ！ (4倍)";

        default:
            return multiplier + "倍";

    }

}
