import { SvgIcon, SvgIconProps } from '@mui/material';

export const BehanceIcon = ({
  color,
  ...props
}: Omit<SvgIconProps, 'color'> & { color: string }) => {
  return (
    <SvgIcon
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs></defs>
      <g
        style={{
          stroke: 'none',
          strokeWidth: 0,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'none',
          fillRule: 'nonzero',
          opacity: 10,
        }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 58.938 41.512 c -1.498 0 -2.655 0.431 -3.476 1.278 c -0.827 0.845 -1.342 1.995 -1.553 3.45 h 10.04 v 0 c -0.109 -1.549 -0.626 -2.721 -1.557 -3.522 C 61.468 41.915 60.314 41.512 58.938 41.512 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: color,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 37.047 40.939 c 0.842 -0.513 1.262 -1.425 1.262 -2.735 c 0 -1.447 -0.556 -2.408 -1.671 -2.87 c -0.958 -0.321 -2.185 -0.487 -3.672 -0.487 h -5.79 v 6.863 h 6.583 C 35.111 41.71 36.205 41.453 37.047 40.939 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: color,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 36.964 47.388 c -0.737 -0.341 -1.777 -0.515 -3.111 -0.527 h -6.678 v 8.291 h 6.574 c 1.351 0 2.396 -0.177 3.151 -0.546 c 1.361 -0.678 2.043 -1.969 2.043 -3.885 C 38.943 49.105 38.282 47.988 36.964 47.388 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: color,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 c 24.853 0 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 52.625 30.735 h 12.529 v 3.112 h -0.001 H 52.625 V 30.735 z M 44.115 56.129 c -0.589 0.968 -1.321 1.785 -2.201 2.444 c -0.99 0.761 -2.163 1.283 -3.511 1.562 c -1.352 0.279 -2.816 0.42 -4.393 0.42 H 20 V 29.445 h 15.025 c 3.787 0.062 6.472 1.159 8.058 3.314 c 0.951 1.322 1.423 2.907 1.423 4.751 c 0 1.902 -0.477 3.424 -1.438 4.58 c -0.534 0.648 -1.324 1.238 -2.369 1.77 c 1.583 0.579 2.784 1.492 3.587 2.748 c 0.808 1.252 1.212 2.772 1.212 4.557 C 45.497 53.011 45.042 54.667 44.115 56.129 z M 69.994 50.084 H 53.769 c 0.089 2.24 0.863 3.806 2.329 4.702 c 0.884 0.562 1.956 0.837 3.212 0.837 c 1.324 0 2.403 -0.335 3.233 -1.023 c 0.453 -0.365 0.852 -0.879 1.197 -1.529 h 5.947 c -0.156 1.323 -0.872 2.664 -2.159 4.028 c -1.994 2.167 -4.79 3.253 -8.381 3.253 c -2.967 0 -5.581 -0.916 -7.85 -2.742 c -2.262 -1.832 -3.398 -4.804 -3.398 -8.927 c 0 -3.866 1.02 -6.825 3.066 -8.885 c 2.054 -2.064 4.705 -3.091 7.972 -3.091 c 1.937 0 3.683 0.346 5.24 1.042 c 1.553 0.697 2.836 1.793 3.847 3.3 c 0.915 1.327 1.503 2.862 1.777 4.609 C 69.953 46.677 70.022 48.154 69.994 50.084 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: color,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
      </g>
    </SvgIcon>
  );
};
