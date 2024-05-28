package com.pill.pill.infrastructure;

import com.pill.pill.domain.Pill;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class AiServerImpl implements AiServer {
    @Override
    public Pill search(MultipartFile front, MultipartFile back) {
        return null;
    }
}
