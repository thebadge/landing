import * as React from 'react';
import TwitterMUIIcon from '@mui/icons-material/Twitter';

type IconProps = React.SVGProps<SVGSVGElement> & {
  link: string;
};

const TwitterIcon = (props: IconProps) => (
  <a href={props.link} target={'_blank'} rel="noreferrer">
    <TwitterMUIIcon
      sx={{
        width: 28,
        height: 28,
        fill: '#ffffff',
      }}
    />
  </a>
);

export default TwitterIcon;
