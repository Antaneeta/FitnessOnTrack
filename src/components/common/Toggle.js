import { TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import LinearGradient from 'react-native-linear-gradient';

import * as color from '../../Themes/colors';

const Toggle = ({ item }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <TouchableOpacity>
      <LinearGradient colors={isEnabled ? ['#C58BF2', '#EEA4CE'] : ['grey', 'grey']} style={{ borderRadius: 20 }}>
        <ToggleSwitch
          isOn={isEnabled}
          onColor="trasparent"
          offColor="trasparent"
          labelStyle={{ color: 'black', fontWeight: '900' }}
          size="Medium"
          onToggle={isOn => setIsEnabled(isOn)}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Toggle;



const styles = StyleSheet.create({
  
});
