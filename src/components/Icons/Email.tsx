import * as React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

type IconProps = React.SVGProps<SVGSVGElement> & {
  link: string;
};

const EmailIcon = (props: IconProps) => (
  <a href={props.link} target={'_blank'} rel="noreferrer">
    <MailOutlineIcon
      sx={{
        width: 28,
        height: 28,
        fill: '#ffffff',
      }}
    />
  </a>
);

export default EmailIcon;
