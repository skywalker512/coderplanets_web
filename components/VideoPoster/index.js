/*
 *
 * VideoPoster
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '../../config'

import { Wrapper, PosterImage, PlayIcon } from './styles'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:VideoPoster:index')
/* eslint-enable no-unused-vars */

const VideoPoster = ({ poster }) => (
  <Wrapper>
    <PlayIcon src={`${ICON_CMD}/player_play.svg`} />
    <PosterImage src={poster} />
  </Wrapper>
)

VideoPoster.propTypes = {
  poster: PropTypes.string.isRequired,
}

VideoPoster.defaultProps = {}

export default React.memo(VideoPoster)
