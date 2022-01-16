import React from 'react';
import '../assets/styles/storybook.scss';

export default {
  title: 'foundation/Color'
}

export const Color = () => (
  <div className="sb-colors">

    <div className="sb-color sb-primary">
      <div>
        Primary
        <span>#4A5990</span>
      </div>
      <div>
        Dark
        <span>#001A48</span>
      </div>
      <div>
        Gradient
        <span>#4A5990 - #001A48</span>
      </div>
    </div>

    <div className="sb-color sb-secondary">
      <div>
        Secondary
        <span>#CBD3F0</span>
      </div>
      <div>
        Dark
        <span>#B4C0EA</span>
      </div>
      <div>
        Gradient
        <span>#CBD3F0 - #B4C0EA</span>
      </div>
   </div>

   <div className="sb-color sb-tertiary">
      <div>
        Tertiary
        <span>#EFF2FB</span>
      </div>
      <div>
        Dark
        <span>#D8DFF5</span>
      </div>
      <div>
        Gradient
        <span>#EFF2FB - #D8DFF5</span>
      </div>
   </div>

   <hr/>

   <div className="sb-color sb-neutral">
      <div>
        Neutral
        <span>#F5F5F5</span>
      </div>
      <div>
        Neutral-2
        <span>#DFDFDF</span>
      </div>
      <div>
        Neutral-3
        <span>#CDCDCD</span>
      </div>
      <div>
        Neutral-4
        <span>#898989</span>
      </div>
      <div>
        Neutral-5
        <span>#282A30</span>
      </div>
   </div>

   <div className="sb-color sb-neutral-gradient">
      <div>
        Gradient
        <span>#DFDFDF - #CDCDCD</span>
      </div>
      <div>
        Gradient Light
        <span>#F5F5F5 - #DFDFDF</span>
      </div>
      <div>
        Gradient Dark
        <span>#898989 - #282A30</span>
      </div>
   </div>

   <hr/>

   <div className="sb-color sb-success">
      <div>
        Success
        <span>#24C196</span>
      </div>
      <div>
      Success Transparent
        <span>#05AD7F</span>
      </div>
      <div>
      Success Gradient
        <span>#24C196 - #05AD7F</span>
      </div>
   </div>

   <div className="sb-color sb-warning">
      <div>
        Warning
        <span>#24C196</span>
      </div>
      <div>
        Warning Transparent
        <span>#05AD7F</span>
      </div>
      <div>
        Warning Gradient
        <span>#24C196 - #05AD7F</span>
      </div>
   </div>

   <div className="sb-color sb-error">
      <div>
        Error
        <span>#D84747</span>
      </div>
      <div>
        Error Dark
        <span>#BC2E2E</span>
      </div>
      <div>
        Error Gradient
        <span>#24C196 - #05AD7F</span>
      </div>
   </div>

   <div className="sb-color sb-status">
      <div>
        Status
        <span>#D84747</span>
      </div>
      <div>
        Status Dark
        <span>#BC2E2E</span>
      </div>
      <div>
        Status Gradient
        <span>#24C196 - #05AD7F</span>
      </div>
   </div>

   <hr/>

  <div className="sb-color sb-white">
    <div>
      White
      <span>#FFFFFF</span>
    </div>
    <div>
      White Transparent
      <span>#FFFFFF80</span>
    </div>
  </div>

  <hr/>

  <div className="sb-color sb-black">
    <div>
      Black
      <span>#000000</span>
    </div>
    <div>
      Black Transparent
      <span>#00000080</span>
    </div>
  </div>

  </div>
);