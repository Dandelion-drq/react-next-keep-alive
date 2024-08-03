import React, { ReactElement, Fragment } from 'react';
import { KeepAliveName, KeepAliveOptsProps } from './provider';

type KeepAliveProps = {
  children: ReactElement,
}

const defaultOpts: KeepAliveOptsProps = {
  keepScrollEnabled: true,
  applyNewProps: false
};

const withKeepAlive = <T,>(
  Component: ((props: T) => JSX.Element),
  name: KeepAliveName,
  opts: KeepAliveOptsProps = defaultOpts
) => {
  const KeepAlive = (props: KeepAliveProps & T) => (
    // eslint-disable-next-line react/jsx-fragments
    <Fragment>
      <Component {...props} />
    </Fragment>
  );

  // Copy getInitial props so it will run as well
  // @ts-ignore
  if (Component.getInitialProps) {
    // @ts-ignore
    KeepAlive.getInitialProps = Component.getInitialProps;
  }

  const { keepScrollEnabled, applyNewProps } = opts || {};

  KeepAlive.keepAlive = {
    name,
    keepScrollEnabled,
    applyNewProps
  };

  return KeepAlive;
};

export default withKeepAlive;
