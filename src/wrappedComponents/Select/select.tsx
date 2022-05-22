import { FC } from "react"
import { SelectProps, WrappedSelectProps } from "./interface"
import { Wrapper } from "../Wrapper"
import { Select } from "@illa-design/select"
import LabelWrapper from "../LabelWrapper"
import { withParser } from "../parserHOC"

export const WrappedSelect: FC<WrappedSelectProps> = (props) => {
  const { optionConfigureMode, showClear } = props
  const {
    label,
    labelAlign,
    labelCaption,
    labelPosition,
    labelWidth,
    labelWidthUnit,
    required,
    hidden,
    tooltipText,
  } = props
  const selectProps: SelectProps = props
  return (
    <Wrapper>
      <LabelWrapper
        label={label}
        labelAlign={labelAlign}
        labelWidth={labelWidth}
        labelCaption={labelCaption}
        labelWidthUnit={labelWidthUnit}
        labelPosition={labelPosition}
        required={required}
        tooltipText={tooltipText}
      >
        <Select allowClear={showClear} {...selectProps} />
      </LabelWrapper>
    </Wrapper>
  )
}

WrappedSelect.displayName = "SelectWidget"

export const SelectWidget = withParser(WrappedSelect)
