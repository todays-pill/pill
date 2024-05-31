package com.pill.pillschedule.repository;

import com.pill.member.domain.Member;
import com.pill.pillschedule.domain.PillSchedule;
import com.pill.pillschedule.domain.ScheduleDay;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ScheduleDayRepository extends JpaRepository<ScheduleDay, Long> {
    @Query("select ps from ScheduleDay sd join sd.pillSchedule ps where sd.day = :day and ps.member = :member")
    List<PillSchedule> findByDay(@Param("day") String day, @Param("member") Member member);
}
