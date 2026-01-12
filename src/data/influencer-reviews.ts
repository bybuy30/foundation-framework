/**
 * Influencer Reviews Configuration
 * 
 * This file contains the influencer review data.
 * Update this array to change reviews site-wide.
 */

export interface InfluencerReview {
  id: string;
  thumbnail_url: string;
  influencer_name: string;
  review_text: string;
  star_rating: number;
  video_link: string;
}

export const influencerReviews: InfluencerReview[] = [
  {
    id: "1",
    thumbnail_url: "/placeholder.svg",
    influencer_name: "Influencer 1",
    review_text: "Quote",
    star_rating: 5,
    video_link: "#",
  },
  {
    id: "2",
    thumbnail_url: "/placeholder.svg",
    influencer_name: "Influencer 2",
    review_text: "Quote",
    star_rating: 5,
    video_link: "#",
  },
  {
    id: "3",
    thumbnail_url: "/placeholder.svg",
    influencer_name: "Influencer 3",
    review_text: "Quote",
    star_rating: 4,
    video_link: "#",
  },
  {
    id: "4",
    thumbnail_url: "/placeholder.svg",
    influencer_name: "Influencer 4",
    review_text: "Quote",
    star_rating: 5,
    video_link: "#",
  },
  {
    id: "5",
    thumbnail_url: "/placeholder.svg",
    influencer_name: "Influencer 5",
    review_text: "Quote",
    star_rating: 5,
    video_link: "#",
  },
];

export default influencerReviews;
