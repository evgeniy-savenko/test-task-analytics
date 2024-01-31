import { MockData } from '../models/MockData';

export class AnaliticApiProvider {
  // Метод для получения данных, можно экстендить абстрактный класс например чтобы оборачивать нужными заголовками, применять серилизацию если нужно
  // ну  и если так используется, то желательно его биндить и инжектить потом в компонент
  get(filter: string): Promise<any> {
    // Фейковые данные для разных фильтров
    const fakeDataMap: { [key: string]: any } = {
      yesterday: {
        filter: 'yesterday',
        statistics: {
          totalRequests: '12',
          review: '22',
          negative: '2',
          score: {
            count: '4.2',
            total: '44',
          },
        },
        platformsStatistics: [
          {
            company: 'Яндекс',
            rating: {
              startPeriod: {
                total: '10',
                rating: '3.2',
              },
              endPeriod: {
                total: '14',
                rating: '4.8',
              },
            },
            ratingChanges: {
              rating: '+0.3',
              review: '+12',
            },
            negativeRatingToday: {
              count: '1',
              percentage: '1%',
            },
            total: '31',
            place: '1',
            isActive: true,
          },
          {
            company: 'Продокторов',
            rating: {
              startPeriod: {
                total: '15',
                rating: '2.8',
              },
              endPeriod: {
                total: '26',
                rating: '4.5',
              },
            },
            ratingChanges: {
              rating: '+0.1',
              review: '+10',
            },
            negativeRatingToday: {
              count: '2',
              percentage: '1%',
            },
            total: '1',
            place: '3',
            isActive: true,
          },
          {
            company: 'Google',
            rating: {
              startPeriod: {
                total: '1',
                rating: '3.1',
              },
              endPeriod: {
                total: '3',
                rating: '4.0',
              },
            },
            ratingChanges: {
              rating: '+0.1',
              review: '+23',
            },
            negativeRatingToday: {
              count: '1',
              percentage: '1%',
            },
            total: '7',
            place: '1',
            isActive: true,
          },
          {
            company: 'Zoon',
            rating: {
              startPeriod: {
                total: '1',
                rating: '2.2',
              },
              endPeriod: {
                total: '1',
                rating: '4.2',
              },
            },
            ratingChanges: {
              rating: '+1.3',
              review: '+4',
            },
            negativeRatingToday: {
              count: '1',
              percentage: '5%',
            },
            total: '13',
            place: null,
            isActive: true,
          },
          {
            company: '2ГИС',
            rating: {
              startPeriod: {
                total: '4',
                rating: '2.1',
              },
              endPeriod: {
                total: '4',
                rating: '4.1',
              },
            },
            ratingChanges: {
              rating: '+2.3',
              review: '+14',
            },
            negativeRatingToday: {
              count: '12',
              percentage: '9%',
            },
            total: '34',
            place: '17',
            isActive: true,
          },
          {
            company: 'Yell',
            rating: {
              startPeriod: {
                total: '1',
                rating: '4.4',
              },
              endPeriod: {
                total: '3',
                rating: '4.9',
              },
            },
            ratingChanges: {
              rating: '+1.3',
              review: '+3',
            },
            negativeRatingToday: {
              count: '1',
              percentage: '1%',
            },
            total: '2',
            place: '123',
            isActive: true,
          },
        ],
      },
      week: {
        filter: 'week',
        statistics: {
          totalRequests: '120',
          review: '42',
          negative: '12',
          score: {
            count: '4.9',
            total: '129',
          },
        },
        platformsStatistics: [
          {
            company: 'Яндекс',
            rating: {
              startPeriod: {
                total: '26',
                rating: '4.8',
              },
              endPeriod: {
                total: '18',
                rating: '4.9',
              },
            },
            ratingChanges: {
              rating: '+2.3',
              review: '+22',
            },
            negativeRatingToday: {
              count: '11',
              percentage: '4%',
            },
            total: '39',
            place: '2',
            isActive: true,
          },
          {
            company: 'Продокторов',
            rating: {
              startPeriod: {
                total: '35',
                rating: '3.2',
              },
              endPeriod: {
                total: '23',
                rating: '4.9',
              },
            },
            ratingChanges: {
              rating: '+0.7',
              review: '+11',
            },
            negativeRatingToday: {
              count: '2',
              percentage: '1%',
            },
            total: '71',
            place: '3',
            isActive: true,
          },
          {
            company: 'Google',
            rating: {
              startPeriod: {
                total: '11',
                rating: '3.2',
              },
              endPeriod: {
                total: '38',
                rating: '4.0',
              },
            },
            ratingChanges: {
              rating: '+0.8',
              review: '+27',
            },
            negativeRatingToday: {
              count: '12',
              percentage: '2%',
            },
            total: '78',
            place: '17',
            isActive: true,
          },
          {
            company: 'Zoon',
            rating: {
              startPeriod: {
                total: '2',
                rating: '3.2',
              },
              endPeriod: {
                total: '21',
                rating: '4.5',
              },
            },
            ratingChanges: {
              rating: '+3.3',
              review: '+4',
            },
            negativeRatingToday: {
              count: '3',
              percentage: '5%',
            },
            total: '3',
            place: null,
            isActive: true,
          },
          {
            company: '2ГИС',
            rating: {
              startPeriod: {
                total: '10',
                rating: '3.2',
              },
              endPeriod: {
                total: '4',
                rating: '3.9',
              },
            },
            ratingChanges: {
              rating: '+2.3',
              review: '+1',
            },
            negativeRatingToday: {
              count: '12',
              percentage: '9%',
            },
            total: '34',
            place: '17',
            isActive: true,
          },
          {
            company: 'Yell',
            rating: {
              startPeriod: {
                total: '10',
                rating: '4.2',
              },
              endPeriod: {
                total: '3',
                rating: '4.8',
              },
            },
            ratingChanges: {
              rating: '+1.3',
              review: '+3',
            },
            negativeRatingToday: {
              count: '1',
              percentage: '1%',
            },
            total: '2',
            place: '3',
            isActive: true,
          },
        ],
      },
      month: {
        filter: 'month',
        statistics: {
          totalRequests: '1720',
          review: '142',
          negative: '22',
          score: {
            count: '4.5',
            total: '629',
          },
        },
        platformsStatistics: [
          {
            company: 'Яндекс',
            rating: {
              startPeriod: {
                total: '46',
                rating: '3.8',
              },
              endPeriod: {
                total: '118',
                rating: '4.5',
              },
            },
            ratingChanges: {
              rating: '+2.3',
              review: '+72',
            },
            negativeRatingToday: {
              count: '16',
              percentage: '4%',
            },
            total: '391',
            place: '1',
            isActive: true,
          },
          {
            company: 'Продокторов',
            rating: {
              startPeriod: {
                total: '135',
                rating: '3.8',
              },
              endPeriod: {
                total: '236',
                rating: '4.5',
              },
            },
            ratingChanges: {
              rating: '+0.7',
              review: '+101',
            },
            negativeRatingToday: {
              count: '2',
              percentage: '1%',
            },
            total: '271',
            place: '3',
            isActive: true,
          },
          {
            company: 'Google',
            rating: {
              startPeriod: {
                total: '11',
                rating: '3.2',
              },
              endPeriod: {
                total: '38',
                rating: '4.0',
              },
            },
            ratingChanges: {
              rating: '+0.8',
              review: '+27',
            },
            negativeRatingToday: {
              count: '12',
              percentage: '2%',
            },
            total: '78',
            place: '17',
            isActive: true,
          },
          {
            company: 'Zoon',
            rating: {
              startPeriod: {
                total: '7',
                rating: '1.2',
              },
              endPeriod: {
                total: '31',
                rating: '4.5',
              },
            },
            ratingChanges: {
              rating: '+3.3',
              review: '+24',
            },
            negativeRatingToday: {
              count: '3',
              percentage: '5%',
            },
            total: '123',
            place: null,
            isActive: true,
          },
          {
            company: '2ГИС',
            rating: {
              startPeriod: {
                total: '40',
                rating: '2.2',
              },
              endPeriod: {
                total: '4',
                rating: '4.1',
              },
            },
            ratingChanges: {
              rating: '+2.3',
              review: '+14',
            },
            negativeRatingToday: {
              count: '12',
              percentage: '9%',
            },
            total: '34',
            place: '17',
            isActive: true,
          },
          {
            company: 'Yell',
            rating: {
              startPeriod: {
                total: '10',
                rating: '4.2',
              },
              endPeriod: {
                total: '3',
                rating: '4.8',
              },
            },
            ratingChanges: {
              rating: '+1.3',
              review: '+3',
            },
            negativeRatingToday: {
              count: '1',
              percentage: '1%',
            },
            total: '2',
            place: '123',
            isActive: true,
          },
        ],
      },
      quarter: {
        filter: 'quarter',
        statistics: {
          totalRequests: '3720',
          review: '342',
          negative: '92',
          score: {
            count: '5.0',
            total: '1229',
          },
        },
        platformsStatistics: [
          {
            company: 'Яндекс',
            rating: {
              startPeriod: {
                total: '86',
                rating: '4.0',
              },
              endPeriod: {
                total: '318',
                rating: '4.5',
              },
            },
            ratingChanges: {
              rating: '+2.3',
              review: '+172',
            },
            negativeRatingToday: {
              count: '116',
              percentage: '4%',
            },
            total: '900',
            place: '1',
            isActive: true,
          },
          {
            company: 'Продокторов',
            rating: {
              startPeriod: {
                total: '335',
                rating: '4.8',
              },
              endPeriod: {
                total: '783',
                rating: '4.9',
              },
            },
            ratingChanges: {
              rating: '+7.7',
              review: '+301',
            },
            negativeRatingToday: {
              count: '13',
              percentage: '1%',
            },
            total: '571',
            place: '3',
            isActive: true,
          },
          {
            company: 'Google',
            rating: {
              startPeriod: {
                total: '111',
                rating: '4.1',
              },
              endPeriod: {
                total: '38',
                rating: '4.7',
              },
            },
            ratingChanges: {
              rating: '+8.8',
              review: '+127',
            },
            negativeRatingToday: {
              count: '12',
              percentage: '2%',
            },
            total: '178',
            place: '1',
            isActive: true,
          },
          {
            company: 'Zoon',
            rating: {
              startPeriod: {
                total: '47',
                rating: '1.2',
              },
              endPeriod: {
                total: '31',
                rating: '4.5',
              },
            },
            ratingChanges: {
              rating: '+3.3',
              review: '+24',
            },
            negativeRatingToday: {
              count: '3',
              percentage: '5%',
            },
            total: '123',
            place: null,
            isActive: true,
          },
          {
            company: '2ГИС',
            rating: {
              startPeriod: {
                total: '40',
                rating: '2.2',
              },
              endPeriod: {
                total: '4',
                rating: '4.1',
              },
            },
            ratingChanges: {
              rating: '+2.3',
              review: '+14',
            },
            negativeRatingToday: {
              count: '12',
              percentage: '9%',
            },
            total: '34',
            place: '17',
            isActive: true,
          },
          {
            company: 'Yell',
            rating: {
              startPeriod: {
                total: '10',
                rating: '4.2',
              },
              endPeriod: {
                total: '3',
                rating: '4.8',
              },
            },
            ratingChanges: {
              rating: '+1.3',
              review: '+3',
            },
            negativeRatingToday: {
              count: '1',
              percentage: '1%',
            },
            total: '2',
            place: '123',
            isActive: true,
          },
        ],
      },
      year: {
        filter: 'year',
        statistics: {
          totalRequests: '10720',
          review: '1420',
          negative: '220',
          score: {
            count: '5',
            total: '6290',
          },
        },
        platformsStatistics: [
          {
            company: 'Яндекс',
            rating: {
              startPeriod: {
                total: '1146',
                rating: '3.8',
              },
              endPeriod: {
                total: '118',
                rating: '4.9',
              },
            },
            ratingChanges: {
              rating: '+8.3',
              review: '+572',
            },
            negativeRatingToday: {
              count: '556',
              percentage: '4%',
            },
            total: '1121',
            place: '1',
            isActive: true,
          },
          {
            company: 'Продокторов',
            rating: {
              startPeriod: {
                total: '1235',
                rating: '3.8',
              },
              endPeriod: {
                total: '236',
                rating: '4.9',
              },
            },
            ratingChanges: {
              rating: '+9.7',
              review: '+301',
            },
            negativeRatingToday: {
              count: '2',
              percentage: '1%',
            },
            total: '1271',
            place: '3',
            isActive: true,
          },
          {
            company: 'Google',
            rating: {
              startPeriod: {
                total: '111',
                rating: '3.2',
              },
              endPeriod: {
                total: '38',
                rating: '4.5',
              },
            },
            ratingChanges: {
              rating: '+4.8',
              review: '+273',
            },
            negativeRatingToday: {
              count: '122',
              percentage: '8%',
            },
            total: '781',
            place: '7',
            isActive: true,
          },
          {
            company: 'Zoon',
            rating: {
              startPeriod: {
                total: '71',
                rating: '1.2',
              },
              endPeriod: {
                total: '310',
                rating: '4.4',
              },
            },
            ratingChanges: {
              rating: '+3.3',
              review: '+24',
            },
            negativeRatingToday: {
              count: '3',
              percentage: '5%',
            },
            total: '123',
            place: null,
            isActive: true,
          },
          {
            company: '2ГИС',
            rating: {
              startPeriod: {
                total: '40',
                rating: '2.2',
              },
              endPeriod: {
                total: '4',
                rating: '4.1',
              },
            },
            ratingChanges: {
              rating: '+2.3',
              review: '+14',
            },
            negativeRatingToday: {
              count: '12',
              percentage: '9%',
            },
            total: '34',
            place: '17',
            isActive: true,
          },
          {
            company: 'Yell',
            rating: {
              startPeriod: {
                total: '10',
                rating: '4.2',
              },
              endPeriod: {
                total: '3',
                rating: '4.8',
              },
            },
            ratingChanges: {
              rating: '+1.3',
              review: '+3',
            },
            negativeRatingToday: {
              count: '1',
              percentage: '1%',
            },
            total: '2',
            place: '123',
            isActive: true,
          },
        ],
      },
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        // Возвращаем данные в зависимости от фильтра или дефолтные данные
        resolve(fakeDataMap[filter]);
      }, 1000);
    });
  }
}
