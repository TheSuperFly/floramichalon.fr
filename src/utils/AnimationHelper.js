/* eslint-disable no-unused-vars */
import { TimelineMax, AttrPlugin, CSSPlugin } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
/* eslint-enable no-unused-vars */

const AnimationHelper = {};

AnimationHelper.aboutPageEntrance = (
  $Words,
  $BigLetter,
  $BiographyCTA,
  $SocialLinks,
  $Credits,
) => {
  const tl = new TimelineMax();

  tl
    .staggerFromTo($Words, 0.5, { opacity: 0 }, { opacity: 1 }, 0.0015)
    .fromTo($BigLetter, 0.5, { opacity: 0 }, { opacity: 1 })
    .fromTo($BiographyCTA, 0.5, { opacity: 0 }, { opacity: 1 })
    .staggerFromTo($SocialLinks, 0.5, { opacity: 0 }, { opacity: 1 }, 0.25)
    .fromTo($Credits, 0.5, { opacity: 0 }, { opacity: 1 }, '+=0.5');
};

AnimationHelper.projectImageSquareFullscreen = (
  $ProjectImageLeft,
  $ProjectImageRight,
  $ClipContainer,
  squareWidth,
  squareHeight,
  callback,
) => {
  const containerHeight = $ClipContainer.offsetHeight;
  const windowWidth = window.innerWidth;

  const imageLeftRightY = (containerHeight / 2) - (squareHeight / 2);
  const imageLeftX = (windowWidth / 2) - squareWidth;

  const tl = new TimelineMax({ onComplete: callback });

  tl
    .set([$ProjectImageLeft, $ProjectImageRight], { attr: { y: imageLeftRightY } }, 0)

    .set($ClipContainer, { width: '100%' }, 0.5)
    .set($ProjectImageLeft, { attr: { x: imageLeftX } }, 0.5)
    .set($ProjectImageRight, { attr: { x: '50%' } }, 0.5)

    .set($ProjectImageLeft, { attr: { x: 0, y: 0 }, height: '100%', width: '50%' }, 1)
    .set($ProjectImageRight, { attr: { y: 0, x: '50%' }, height: '100%', width: '50%' }, 1)

    .set({}, {}, '+=.5');
};

AnimationHelper.projectImageSquareSplit = (
  $ProjectImageLeft,
  $ProjectImageRight,
  $ClipContainer,
  squareWidth,
  squareHeight,
  marginSize,
  maskLeft,
  maskRight,
  callback,
) => {
  const containerWidth = (squareWidth * 2) + marginSize;

  const tl = new TimelineMax({ onComplete: callback });

  tl
    .set($ClipContainer, { width: containerWidth }, 0)

    .set($ProjectImageRight, { attr: { x: squareWidth + marginSize } }, 0.5)
    .set([$ProjectImageLeft, $ProjectImageRight], { attr: { y: 0 }, width: squareWidth }, 0.5)

    .set($ProjectImageLeft, { attr: { y: maskLeft.y }, height: squareHeight }, 1)
    .set($ProjectImageRight, { attr: { y: maskRight.y }, height: squareHeight }, 1)

    .set({}, {}, '+=.5');
};

AnimationHelper.caseStudyNextEnlarge = (timeline, $ImageContainer, $Container) => {
  const windowSizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const scrollTop = $Container.offsetTop + windowSizes.height;

  timeline
    .set($ImageContainer, { transform: 'translateY(0) !important' }, '0')
    .to($Container, 0.35, { height: windowSizes.height - 200 }, '0')
    .to(window, 0.35, { scrollTo: scrollTop }, '0.17')
    .to($ImageContainer, 0.5, { width: window.innerWidth, height: window.innerHeight }, '0.52')
    .to($ImageContainer, 0.5, { right: 0, top: 0, marginRight: 0 }, '0.52');
};

export default AnimationHelper;
