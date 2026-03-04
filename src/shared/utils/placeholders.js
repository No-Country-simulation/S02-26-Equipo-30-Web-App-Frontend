/**
 * Utility to provide diversified horse placeholder images.
 * Uses a curated list of high-quality Unsplash images.
 */

const HORSE_IMAGES = [
    "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a", // White horse
    "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd", // Brown horse
    "https://images.unsplash.com/photo-1598974357801-cbca100e65d3", // Horse in field
    "https://images.unsplash.com/photo-1518467166778-b88f373ffec7", // Majestic horse
    "https://images.unsplash.com/photo-1534447677768-be436bb09401", // Horse silhouette
    "https://images.unsplash.com/photo-1453227588063-bb302b62f50b", // Close up
    "https://images.unsplash.com/photo-1524388658899-54b7ad17fa69", // Black horse
    "https://images.unsplash.com/photo-1516298299344-c7113f01c70a", // Group of horses
    "https://images.unsplash.com/photo-1536214018742-993d03d748FA", // Running horse
    "https://images.unsplash.com/photo-1493191042658-8aa00e72618a", // Golden hour horse
    "https://images.unsplash.com/photo-1510672981848-a1c4f1cb58f1", // Arctic horse
    "https://images.unsplash.com/photo-1505244510004-20fe652566b6", // Equestrian
];

/**
 * Returns a consistent placeholder image for a given ID.
 * @param {string|number} id - The horse or listing ID.
 * @param {number} width - Desired width.
 * @returns {string} - Unsplash image URL.
 */
export const getHorsePlaceholder = (id, width = 800) => {
    if (!id) return `${HORSE_IMAGES[0]}?q=80&w=${width}&auto=format&fit=crop`;

    // Hash the ID to get a stable index
    const idString = id.toString();
    let hash = 0;
    for (let i = 0; i < idString.length; i++) {
        hash = (hash << 5) - hash + idString.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }

    const index = Math.abs(hash) % HORSE_IMAGES.length;
    return `${HORSE_IMAGES[index]}?q=80&w=${width}&auto=format&fit=crop`;
};
