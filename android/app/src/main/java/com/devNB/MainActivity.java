package com.devNB;

import com.getcapacitor.plugin.http.Http;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);

        //Initialise
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
            add(Http.class);
        }})
    }
}
