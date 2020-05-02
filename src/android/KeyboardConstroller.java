package org.apache.cordova.keyboardconstroller;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class KeyboardConstroller extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("resizeWebview")) {
            String message = args.getString(0);
            this.resizeWebview(message, callbackContext);
            return true;
        }
        return false;
    }

    private void resizeWebview(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
