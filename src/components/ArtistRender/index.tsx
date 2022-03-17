/* eslint-disable @typescript-eslint/no-use-before-define */
import { HTMLAttributes } from 'react';
import cn from 'classnames';
import { Stage, Sprite } from '@inlet/react-pixi';

import styles from './styles.module.css';

export type ArtistRenderProps = HTMLAttributes<HTMLElement> & {
  layers: string[];
};

export default function ArtistRender({
  className,
  layers,
  ...rest
}: ArtistRenderProps) {
  const stage = {
    width: 800,
    height: 520,
  };

  return (
    <Stage
      width={stage.width}
      height={stage.height}
      className={cn(styles.component, className)}
      options={{ backgroundAlpha: 0.5 }}
      {...rest}
    >
      {layers.map((src) => (
        <Sprite
          image={src}
          anchor={0.5}
          x={stage.width / 2}
          y={stage.height / 2}
          scale={0.2}
          key={src}
        />
      ))}
    </Stage>
  );
}
