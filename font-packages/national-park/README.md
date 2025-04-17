# @expo-google-fonts/national-park

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/national-park)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/national-park)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/national-park)

This package lets you use the [**National Park**](https://fonts.google.com/specimen/National+Park) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## National Park

![National Park](./font-family.png)

This font family contains [7 styles](#-gallery).

- `NationalPark_200ExtraLight`
- `NationalPark_300Light`
- `NationalPark_400Regular`
- `NationalPark_500Medium`
- `NationalPark_600SemiBold`
- `NationalPark_700Bold`
- `NationalPark_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/national-park expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/national-park/useFonts';
import { NationalPark_200ExtraLight } from '@expo-google-fonts/national-park/200ExtraLight';
import { NationalPark_300Light } from '@expo-google-fonts/national-park/300Light';
import { NationalPark_400Regular } from '@expo-google-fonts/national-park/400Regular';
import { NationalPark_500Medium } from '@expo-google-fonts/national-park/500Medium';
import { NationalPark_600SemiBold } from '@expo-google-fonts/national-park/600SemiBold';
import { NationalPark_700Bold } from '@expo-google-fonts/national-park/700Bold';
import { NationalPark_800ExtraBold } from '@expo-google-fonts/national-park/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    NationalPark_200ExtraLight, 
    NationalPark_300Light, 
    NationalPark_400Regular, 
    NationalPark_500Medium, 
    NationalPark_600SemiBold, 
    NationalPark_700Bold, 
    NationalPark_800ExtraBold
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NationalPark_200ExtraLight"
        }}>
          National Park Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NationalPark_300Light"
        }}>
          National Park Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NationalPark_400Regular"
        }}>
          National Park Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NationalPark_500Medium"
        }}>
          National Park Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NationalPark_600SemiBold"
        }}>
          National Park Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NationalPark_700Bold"
        }}>
          National Park Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NationalPark_800ExtraBold"
        }}>
          National Park Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NationalPark_200ExtraLight](./200ExtraLight/NationalPark_200ExtraLight.ttf.png)|![NationalPark_300Light](./300Light/NationalPark_300Light.ttf.png)|![NationalPark_400Regular](./400Regular/NationalPark_400Regular.ttf.png)||
|![NationalPark_500Medium](./500Medium/NationalPark_500Medium.ttf.png)|![NationalPark_600SemiBold](./600SemiBold/NationalPark_600SemiBold.ttf.png)|![NationalPark_700Bold](./700Bold/NationalPark_700Bold.ttf.png)||
|![NationalPark_800ExtraBold](./800ExtraBold/NationalPark_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/national-park` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [National Park page on Google Fonts](https://fonts.google.com/specimen/National+Park) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [National Park on Google Fonts](https://fonts.google.com/specimen/National+Park)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/national-park)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/national-park)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
