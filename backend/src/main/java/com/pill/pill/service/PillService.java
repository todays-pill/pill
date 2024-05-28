package com.pill.pill.service;

import com.pill.pill.dto.PillDetailDto;
import org.springframework.web.multipart.MultipartFile;

public interface PillService {
    PillDetailDto searchPill(MultipartFile frontImage, MultipartFile backImage);
}
