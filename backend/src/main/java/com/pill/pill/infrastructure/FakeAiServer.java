package com.pill.pill.infrastructure;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FakeAiServer implements AiServer {
    @Override
    public String search(MultipartFile front, MultipartFile back) {
        return "K-038896";
    }
}
