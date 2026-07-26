import { Fragment } from 'react';

export function Lines({ text }: { text: string }) {
  const parts = text.split('\n');
  return (
    <>
      {parts.map((line, i) => (
        <Fragment key={i}>
          {line}
          {i < parts.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
}
