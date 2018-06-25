/*
 * a theme inspired by solarized: http://ethanschoonover.com/solarized
 */
// some selection color not supported
import { lighten, darken } from 'polished'

const primaryColor = '#2d7eb1'

const bannerBg = '#003B4A'
const contentBg = '#002A35'

const contentBoxBg = '#072d3a' // contentBg

const fontColor = primaryColor
const sidebarBg = '#001B21'

const markdownFont = '#839496'

const SolarizedDark = {
  htmlBg: contentBoxBg,
  loading: {
    basic: bannerBg,
    animate: lighten(0.03, bannerBg),
    // basic: '#113B4A',
    // animate: '#02495a',
  },
  error: {
    title: primaryColor,
    desc: darken(0.1, primaryColor),
    bg: lighten(0.02, contentBoxBg),
  },

  font: fontColor,
  link: '#269A95',
  main: '#7DC0C5',
  bodyBg: contentBg,
  selectionBg: '#839496',
  header: {
    fg: primaryColor,
    bg: bannerBg,
    spliter: darken(0.04, bannerBg),
    fixed: bannerBg,
    tabActive: primaryColor, // articleTitle
    tabOthers: darken(0.1, primaryColor), // articleBrief
  },
  banner: {
    title: primaryColor,
    bg: bannerBg,
    desc: '#176179',
    spliter: darken(0.04, bannerBg),
    number: primaryColor,
    active: '#2CB4AA',
    numberDesc: '#176179',
    numberDivider: '#1b475d',
    numberHoverBg: '#0d475a',
  },
  thread: {
    bg: contentBoxBg,
    filterResultHint: '#556d23',
    articleTitle: '#427f98',
    articleHover: '#113744',
    articleStrip: '#072d3a',
    articleBrief: '#6B7F83',
    articleTag: '#278a82',
    articleLink: '#278a82',
    commentsUserBorder: contentBoxBg,
    extraInfo: '#987d40',
  },
  content: {
    bg: contentBoxBg,
    cardBg: bannerBg,
    cardBorder: '#194f6f',
    cardBorderHover: '#0F6186',
  },
  footer: {
    text: '#065365',
    hover: '#5c868b',
    label: '#065365',
  },
  sidebar: {
    bg: sidebarBg,
    pin_active: '#849804',
    menu_link: '#93A1A1',
    border_color: '#14363E',
  },
  preview: {
    title: primaryColor,
    desc: '#1b6d88',
    font: fontColor,
    bg: contentBg,
    shadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
    closerShadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
    markdownHelperBg: lighten(0.04, contentBg),
    accountBg: lighten(0.04, contentBg),
    accountDivider: '#184a5d',
    articleBg: lighten(0.04, contentBg),
    helper: lighten(0.1, contentBg),
    helperHover: lighten(0.2, contentBg),
    topLine: '#41c7bd',
    icon: '#41c7bd',
    divider: '#005255',
  },
  article: {
    link: '#276788',
    linkHover: '#00A097',
    reactionTitle: '#62868a',
    reactionHoverBg: lighten(0.04, contentBg),
  },
  comment: {
    icon: '#62868a',
    title: '#62868a',
    username: '#62868a',
    number: '#00A59B',
    floor: '#00A59B',
    reply: '#638688',
    replyBg: '#004c5f',
    placeholder: '#62868a',
    filter: '#62868a',
    filterActive: primaryColor,
    action: '#62868a',
    // mention text displayed in article
    mentionText: '#91a4b5',
    mentionTextBg: '#115267',
    // mention popover background
    mentionBg: contentBoxBg,
    mentionBorder: primaryColor,
    mentionActiveBg: lighten(0.1, contentBoxBg),
    mentionShadow: '0px 2px 10px 1px rgba(47, 46, 46, 0.8)',
  },
  editor: {
    title: '#2a867f',
    content: '#467E93',
    placeholder: '#1E5162',
    headerBg: '#0e3444',
    contentBg: '#0e3444',
    border: '#0e3444',
    borderAcitve: '#10627b',
    borderNormal: '#2d505f',
    footer: '#2B597B',
  },
  pagination: {
    itemBg: '#103440',
    itemBorderColor: '#103440',
    disableText: '#1d5365',
    text: primaryColor,
    inactiveNum: primaryColor,
  },
  heatmap: {
    activityLow: '#007D7C',
    activityHight: '#26A9A0',
    empty: '#024352',
    borderHover: '#176179',
    monthLabel: '#176179',
    scale_1: '#035b63',
    scale_2: '#007470',
    scale_3: '#048a84',
    scale_4: '#05a78e',
    scale_5: '#01c3a5',
  },
  markdown: {
    title: darken(0.05, '#DBE0E1'),
    fg: markdownFont,
    titleBottom: '1px solid #154452',
    hrColor: '#154452',
    blockquoteBorder: '0.25em solid #34535C',
    blockquoteFg: darken(0.09, markdownFont),
    strongFg: lighten(0.2, markdownFont),
    strongBg: '#34535C',
    link: '#2382C4',
    tableBg: lighten(0.01, contentBoxBg),
    tableBg2n: lighten(0.05, contentBoxBg),
    tableborder: `1px solid ${lighten(0.07, contentBoxBg)}`,
    taskDone: '#528416',
    taskPeding: lighten(0.1, contentBoxBg),
  },
  code: {
    bg: lighten(0.03, contentBoxBg),
  },
  shell: {
    link: lighten(0.2, contentBg),
    searchInput: lighten(0.1, contentBg),
    searchIcon: lighten(0.1, contentBg),
    barBg: darken(0.01, contentBg),
    border: lighten(0.05, contentBg),
    title: lighten(0.4, contentBg),
    desc: lighten(0.2, contentBg),
    activeBg: lighten(0.05, contentBg),
  },
  button: {
    primary: primaryColor,
    fg: lighten(0.4, primaryColor),
    hoverBg: lighten(0.1, primaryColor),
    activeBg: darken(0.01, primaryColor),
    clicked: primaryColor,
  },
  navigator: {
    activeBottom: primaryColor,
    borderRight: darken(0.05, bannerBg),
    hoverBg: lighten(0.05, bannerBg),
  },
  popover: {
    bg: bannerBg,
    borderColor: primaryColor,
    boxShadoe: '0 1px 4px rgba(0, 0, 0, 0.15)',
  },
  tags: {
    dotOpacity: 0.5,
  },
  tabs: {
    headerActive: primaryColor,
    header: darken(0.1, primaryColor),
    contentBg: '#0F4553',
    headerActiveBg: '#0e3d4c',
    headerBg: '#0d3a49',
    headerActiveTop: primaryColor,
    border: '#265663',
  },
  modal: {
    bg: bannerBg,
    border: primaryColor,
    innerSelectBg: '#03323e',
  },
  form: {
    inputBg: '#002D39',
    inputBorder: '#005256',
    text: '#617F82',
    label: '#617F82',
    border: '#005256',
  },
  a: {
    hover: primaryColor,
    active: darken(0.1, primaryColor),
  },
}

export default SolarizedDark
