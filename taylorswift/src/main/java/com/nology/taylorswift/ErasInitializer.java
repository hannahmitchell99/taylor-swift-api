package com.nology.taylorswift;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.FileReader;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;

@Component
public class ErasInitializer {

    private final ErasRepository erasRepository;

    @Value("classpath:eras.json")
    private Resource resourceFile;

    @Autowired
    public ErasInitializer(ErasRepository erasRepository){
        this.erasRepository = erasRepository;
    }

    @PostConstruct
    public void init() {
        JSONParser jsonParser = new JSONParser();
        try (FileReader reader = new FileReader(resourceFile.getFile())) {
            Object obj = jsonParser.parse(reader);

            JSONArray jsonArray = (JSONArray) obj;

            for (Object era : jsonArray) {
                JSONObject eraJSON = (JSONObject) era;

                String eraName = (String) eraJSON.get("eraName");
                long eraId = (long) eraJSON.get("id");
                HashMap<String, String> albumOfEra = (HashMap<String, String>) eraJSON.get("albumOfEra");
                String eraDescription = (String) eraJSON.get("eraDescription");
                ArrayList<String> eraColorScheme = (ArrayList<String>) eraJSON.get("eraColorScheme");
                HashMap<String, ArrayList<String>> eraStyle = (HashMap<String, ArrayList<String>>) eraJSON.get("eraStyle");
                String eraIconicQuote = (String) eraJSON.get("eraIconicQuote");
                boolean ownsMastersOfEra = (boolean) eraJSON.get("nationality");
                ArrayList<String> eraInspiration = (ArrayList<String>) eraJSON.get("eraInspiration");

                // HOW CAN WE USE THIS DATA?
                erasRepository.addEra(new Era(eraName, eraId,albumOfEra,eraDescription,eraColorScheme,eraStyle,eraIconicQuote,ownsMastersOfEra,eraInspiration));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
