import React from 'react';

export default function Clear() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="mt-5">Headings</h2>
          <p>
            Headings are 300 weigth with a lighter gray color to give them contrast
            without making the page feel heavy. The clear theme only specifies
            styles for <code>h1</code> through <code>h4</code> elements to encourage
            using fewer heading types for clarity of heading intent.
          </p>
          <h1>Componentry Components</h1>
          <h2>Componentry Components</h2>
          <h3>Componentry Components</h3>
          <h4>Componentry Components</h4>

          <h2 className="mt-5">Paragraphs</h2>
          <p>
            By default paragraphs are constrained to <code>800px</code> wide for
            easier readability. If you need a paragraph that spans the full width of
            any container the <code>mw-100</code> will override the{' '}
            <code>max-width</code> property.
          </p>
        </div>
      </div>
    </div>
  );
}
