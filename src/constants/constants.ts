import ru_RU from 'antd/es/calendar/locale/ru_RU';

export const BASE_URL = 'https://marathon-api.clevertec.ru';
export const RU_CALENDAR_LOCALE = {
    ...ru_RU,

    lang: {
        ...ru_RU.lang,
        shortWeekDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        shortMonths: [
            'Янв',
            'Фев',
            'Мар',
            'Апр',
            'Май',
            'Июн',
            'Июл',
            'Авг',
            'Сен',
            'Окт',
            'Ноя',
            'Дек',
        ],
    },
};

export const DATE_FORMAT = 'DD.MM.YYYY';

export enum STATUS_CODE {
    SUCCESS = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500,
}

export default STATUS_CODE;
