package com.example.coma;

import android.os.Bundle;
import com.phonegap.DroidGap; 

public class CoMa_Main extends DroidGap {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
    	super.onCreate(savedInstanceState); 
    	super.loadUrl("file:///android_asset/www/index.html"); 
    }
    
}
