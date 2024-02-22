import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgRecycle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    className="Recycle_svg__si-glyph Recycle_svg__si-glyph-arrow-circle-rycycle"
    viewBox="0 -0.5 17 17"
    {...props}>
    <G fill="#434343" fillRule="evenodd">
      <Path
        d="m16.945 9.738-1.439-.426c.007-.133.017-.264.017-.396 0-3.53-2.419-6.593-5.752-7.281L9.51 2.996c2.709.561 4.675 3.049 4.675 5.92v.006l-1.302-.385a.586.586 0 0 0-.213.781l1.182 2.207c.15.276.486.375.754.223l2.127-1.229a.586.586 0 0 0 .212-.781M2.438 8.626c0-2.353 1.326-4.454 3.3-5.44l.612 1.658a.59.59 0 0 0 .788-.314l1.071-2.49a.63.63 0 0 0-.304-.818l-2.4-1.11a.587.587 0 0 0-.788.313l.541 1.465C2.778 3.083 1.1 5.695 1.1 8.627c0 .824.135 1.646.404 2.443l1.262-.457a6.3 6.3 0 0 1-.328-1.987M8.713 14.607c-1.046 0-2.065-.263-2.955-.811l1.127-1.188a.59.59 0 0 0-.603-.595H3.656a.607.607 0 0 0-.593.625l.018 2.728a.606.606 0 0 0 .604.614l1.116-1.176a6.92 6.92 0 0 0 3.912 1.19c2.013 0 3.946-.895 5.305-2.454l-.992-.931c-1.106 1.27-2.678 1.998-4.313 1.998"
        className="Recycle_svg__si-glyph-fill"
      />
    </G>
  </Svg>
);
export default SvgRecycle;
