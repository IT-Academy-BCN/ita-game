import AvatarProvider from '../store/context'
import OptionGlassesStyle from './OptionGlassesStyle'
import OptionHairStyle from './OptionHairStyle'
import OptionSex from './OptionSex'
import OptionShirtStyle from './OptionShirtStyle'

function Options() {
  return (
    <AvatarProvider>
      <OptionSex />
      <OptionHairStyle />
      <OptionGlassesStyle />
      <OptionShirtStyle />
    </AvatarProvider>
  )
}

export default Options
