import styled from 'styled-components'

import { theme, cs } from 'utils'
import Img from 'Img'

export const Wrapper = styled.article`
  ${cs.flex()};
  position: relative;
  padding-left: 8px;
  padding-right: 0;
  border-radius: 4px;
  opacity: ${({ opacity }) => opacity};

  padding-top: ${({ divider }) => (divider ? '10px' : '6px')};
  padding-bottom: ${({ divider }) => (divider ? '10px' : '6px')};
  border-bottom: ${({ divider }) => (divider ? '1px solid' : '0')};
  border-bottom-color: ${theme('thread.articleDivider')};

  &:hover {
    background: ${({ hover }) => (hover ? theme('thread.articleHover') : '')};
  }
`
export const Main = styled.div`
  ${cs.flexColumnGrow()};
`
export const TopHalf = styled.div`
  ${cs.flex()};
`
export const SecondHalf = styled.div`
  margin-left: 10px;
  margin-top: -10px;
`
export const AvatarWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`
export const Avatar = styled(Img)`
  ${cs.circle('42px')};
  fill: ${theme('thread.articleTitle')};
  opacity: ${theme('avatarOpacity')};
  display: block;
  margin-top: 2px;

  ${cs.media.mobile`${cs.circle('34px')}`};
`
export const SmallAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;
`
export const Breif = styled.div`
  ${cs.flexGrow('align-center')};
  margin-bottom: 10px;
  margin-left: 10px;
  color: ${theme('thread.articleTitle')};
  &:hover {
    cursor: pointer;
  }
`
export const Title = styled.div`
  font-size: 1rem;
  @media (max-width: 1450px) {
    max-width: 500px;
  }
  @media (max-width: 1250px) {
    max-width: 450px;
  }
  @media (max-width: 1100px) {
    max-width: 350px;
  }
`
export const TitleLink = styled.div`
  position: relative;
  font-size: 0.9rem;
  margin-top: -1px;
  color: ${theme('thread.articleLink')};
  margin-left: 10px;
  opacity: 0.8;
  text-decoration: underline;
`
export const LinkIcon = styled(Img)`
  fill: ${theme('thread.articleLink')};
  position: absolute;
  top: 6px;
  left: -5px;
  width: 12px;
  height: 12px;
`

export const Extra = styled.li`
  display: inline;
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 0.85rem;
  color: ${theme('thread.extraInfo')};
`
export const CommentsDiget = styled.span`
  display: none;

  ${cs.media.mobile`
   display: inline;
    margin-left: 3px;
  `};
`
export const BodyDigest = styled.li`
  margin-top: 5px;
  color: ${theme('thread.articleDigest')};
  margin-right: 20px;
  white-space: normal;
  display: block;
  font-size: 0.85rem;

  ${cs.media.mobile`
    ${cs.truncate('250px')};
`};
`
export const CommentWrapper = styled.div`
  ${cs.flex('align-center')};
  align-self: flex-start;
`
export const CommentIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 14px;
  height: 14px;
  margin-right: 4px;
  display: block;
`
export const CommentNum = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
`
export const TagListWrapper = styled.div``

export const PublishLable = styled.span`
  display: inline;
  ${cs.media.mobile`
    display: none;
    margin-left: 3px;
  `};
`
