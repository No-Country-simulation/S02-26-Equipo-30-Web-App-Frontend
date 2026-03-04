/**
 * Utility to provide diversified horse placeholder images using local assets.
 */

import horse1 from "@/shared/common/img/david-dibert-Huza8QOO3tc-unsplash.jpg";
import horse2 from "@/shared/common/img/guillermo-mota-ax2WNRH_bec-unsplash.jpg";
import horse3 from "@/shared/common/img/helena-lopes-7FC4WpyYcfQ-unsplash.jpg";
import horse4 from "@/shared/common/img/helena-lopes-bunLmHpu1hg-unsplash.jpg";
import horse5 from "@/shared/common/img/helena-lopes-lIeqGEdvex0-unsplash.jpg";
import horse6 from "@/shared/common/img/luisa-peter-7Xp9wDCxivc-unsplash.jpg";
import horse7 from "@/shared/common/img/mahmoud-ayad-cwoXqhi3Prc-unsplash.jpg";
import horse8 from "@/shared/common/img/pieter-van-noorden-cjSUZMA2iW8-unsplash.jpg";

const HORSE_IMAGES = [
    horse1,
    horse2,
    horse3,
    horse4,
    horse5,
    horse6,
    horse7,
    horse8,
];

/**
 * Returns a consistent placeholder image for a given ID using local assets.
 * @param {string|number} id - The horse or listing ID.
 * @returns {string} - Local image path/URL.
 */
export const getHorsePlaceholder = (id) => {
    if (!id) return HORSE_IMAGES[0];

    // Hash the ID to get a stable index
    const idString = id.toString();
    let hash = 0;
    for (let i = 0; i < idString.length; i++) {
        hash = (hash << 5) - hash + idString.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }

    const index = Math.abs(hash) % HORSE_IMAGES.length;
    return HORSE_IMAGES[index];
};
