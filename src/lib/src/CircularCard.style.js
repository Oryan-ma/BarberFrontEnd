

export const _titleStyle = () => {
  return { fontSize: 20, color: "#6F96B8" };
};

export const _container = (height, width, backgroundColor) => {
  return {
    height,
    width,
    backgroundColor,
    borderTopEndRadius: 30,
    borderBottomEndRadius: 30,
    borderTopStartRadius: 100,
    borderBottomStartRadius: 100
  };
};

export const _shadowStyle = shadowColor => {
  return {
    shadowColor,
    shadowRadius: 8,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 4,
      height: 4
    }
  };
};

export default {
  containerGlue: { flexDirection: "row" },
  imageStyle: {
    width: 125,
    height: 125,
    borderRadius: 105,
  },
  textContainer: {
    margin: 16,
    //width: ScreenWidth * 0.4
  },
  titleStyle: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "500"
  },
  descriptionStyle: {
    fontSize: 10,
    color: "#6F96B8",
    fontWeight: "700"
  },
  iconContainer: {
    top: 16,
    right: 16,
    position: "absolute"
  },
  priceTextContainer: {
    right: 16,
    bottom: 16,
    position: "absolute"
  },
  priceTextStyle: {
    fontSize: 20,
    color: "#414045",
    fontWeight: "600"
  }
};
