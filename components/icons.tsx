/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
// FIX: Add all required icons from lucide-react to fix import errors.
import {
  ArrowRight,
  ChevronDown,
  Film,
  GalleryThumbnails,
  Hand,
  HandPalm,
  Images,
  KeyRound,
  Layers,
  Plus,
  RotateCw,
  Scissors,
  SlidersHorizontal,
  Sparkles,
  Tv,
  Type,
  X,
} from 'lucide-react';

const defaultProps = {
  size: 48,
  strokeWidth: 1.5,
};

export const RockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <Hand {...defaultProps} {...props} />
);

export const PaperIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <HandPalm {...defaultProps} {...props} />
);

export const ScissorsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => <Scissors {...defaultProps} {...props} />;

// FIX: Export missing icon components.
export const KeyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <KeyRound {...props} />
);

export const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => <ArrowRight {...props} />;

export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => <ChevronDown {...props} />;

export const FilmIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <Film {...props} />
);

export const FramesModeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => <GalleryThumbnails {...props} />;

export const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <Plus {...props} />
);

export const RectangleStackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => <Layers {...props} />;

export const ReferencesModeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => <Images {...props} />;

export const SlidersHorizontalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => <SlidersHorizontal {...props} />;

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => <Sparkles {...props} />;

export const TextModeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => <Type {...props} />;

export const TvIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <Tv {...props} />
);

export const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <X {...props} />
);

export const ArrowPathIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => <RotateCw {...props} />;
