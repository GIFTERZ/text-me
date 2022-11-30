package domain.member.entity;

import domain.entity.BaseEntity;
import lombok.*;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Getter
@DynamicUpdate
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Member extends BaseEntity {

    @Id
    @Column(nullable = false)
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Lob
    @Embedded
    @Column(nullable = false, unique = true)
    private Password password;

    public Member(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = new Password(password);
    }
}
