import {css} from 'styled-components'

const FONTS = {
    DEFAULT_FONT: `-apple-system, Roboto, Helvetica, Arial, sans-serif`,
    HEADING_FONT: `-apple-system, Roboto, Helvetica, Arial, sans-serif`,
}

const DEFAULT_TEXT_STYLE = {
    fontFamily: FONTS.DEFAULT_FONT,
    fontWeight: 400,
    fontSize: '17px',
    lineHeight: '24px',
    letterSpacing: '-0.025em',
}

const typography = {

    text: {
        default: DEFAULT_TEXT_STYLE,
        primary: DEFAULT_TEXT_STYLE,
        secondary: {
            fontFamily: FONTS.DEFAULT_FONT,
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '20px',
            letterSpacing: '-0.02em',
        },
        helper: {
            fontFamily: FONTS.DEFAULT_FONT,
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '-0.02em',
        },
    },
  
    header: {

        h1:css`
            font-family: ${FONTS.HEADING_FONT};
            font-weight: 700;
            font-size: 43px;
            line-height: 52px;
            letter-spacing: -0.025em;

            @media (min-width: 1920px) { /* XLarge desktop - MED */
            font-size: 47px;
            line-height: 62px;
            }
            @media (max-width: 399px) { /* Mobile - HIGH */
            font-size: 35px;
            line-height: 44px;
            }
        `,
        h2: css`
        font-family: ${FONTS.HEADING_FONT};
        font-weight: 600;
        font-size: 35px;
        line-height: 44px;
        letter-spacing: -0.025em;

        @media (min-width: 1920px) { /* XLarge desktop - MED */
        font-size: 41px;
        line-height: 54px;
        }
        @media (max-width: 399px) {/* Mobile - HIGH */
        font-size: 29px;
        line-height: 38px;
        }
        `,
        h3: css`
        font-family: ${FONTS.HEADING_FONT};
        font-weight: 600;
        font-size: 29px;
        line-height: 38px;
        letter-spacing: -0.025em;

        @media (min-width: 1920px) { /* XLarge desktop - MED */
        font-size: 33px;
        line-height: 42px;
        }
        @media (max-width: 399px) { /* Mobile - HIGH */
        font-size: 26px;
        line-height: 33px;
        }
        `,
        h4: css`
        font-family: ${FONTS.HEADING_FONT};
        font-weight: 600;
        font-size: 21px;
        line-height: 28px;
        letter-spacing: -0.025em;
        @media (min-width: 1920px) { /* XLarge desktop - MED */
        font-size: 23px;
        line-height: 30px;
        }
        @media (max-width: 399px) { /* Mobile - HIGH */
        font-size: 19px;
        line-height: 24px;
        }
        `,
        h5: css`
        font-family: ${FONTS.HEADING_FONT};
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        `,
    }
}

export default typography