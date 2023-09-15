import React, { Component } from "react";
import { WebView } from "react-native-webview";

export function WebviewComponent() {
  return (
    <WebView
      source={{ uri: "https://damp-wall-production.up.railway.app/" }}
      onError={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.warn("WebView error: ", nativeEvent);
      }}
      style={{ marginTop: 23 }}
    />
  );
}
