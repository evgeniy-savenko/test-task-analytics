//сам реквест и респонс описывать не стал тк думаю что это делат либо через опенАпи, либо сваггером
import { FilterEnum } from './Filter';

export interface MockData {
  filter: FilterEnum;
  statistics: Statistics;
  platformsStatistics: PlatformStatistics[];
}

//id может быть что угодно: и интегер и uuid, смотря что используется на проекте
export interface PlatformStatistics {
  company: string;
  id: string;
  rating: PlatformStatisticsRatingPeriod;
  ratingChanges: PlatformStatisticsRatingChanges;
  negativeRatingToday: PlatformStatisticsNegativeRatingToday;
  total: string;
  place: string;
  isActive: boolean;
}

interface PlatformStatisticsRatingPeriod {
  startPeriod: {
    total: string;
    rating: string;
  };
  endPeriod: {
    total: string;
    rating: string;
  };
}

type PlatformStatisticsRatingChanges = {
  rating: string;
  review: string;
};

type PlatformStatisticsNegativeRatingToday = {
  count: string;
  percentage: string;
};

export interface Statistics {
  totalRequests: string;
  review: string;
  negative: string;
  score: StatisticsScore;
}

type StatisticsScore = {
  count: string;
  total: string;
};
