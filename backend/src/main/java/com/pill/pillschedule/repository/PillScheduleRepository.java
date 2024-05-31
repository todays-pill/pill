package com.pill.pillschedule.repository;

import com.pill.member.domain.Member;
import com.pill.pillschedule.domain.PillSchedule;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PillScheduleRepository extends JpaRepository<PillSchedule,Long> {
}
