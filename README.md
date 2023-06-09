# HANAVIE PROJECT

# 왜 HANAVIE 인가?

HANAVIE 는 한글로 ‘하나’ 와 영화를 뜻하는 ‘MOVIE’의 합성어로 영화를 모두 한 곳으로 모으겠다는 취지에서 만들어진 이름 입니다.



# 프로젝트 개요

이 프로젝트는 영화 추천 사이트를 제작하는 것입니다. 이 웹사이트는 REST API를 통해 영화 데이터를 가져와 적절한 알고리즘을 사용하여 사용자에게 보여주며, 또한 OTT 사이트의 인기 순위도 가져와 보다 실용적인 사용 목적을 달성하기 위해 제작됩니다.



# 프로젝트 요구사항

이 웹사이트는 아래의 필수 요구사항과 팀에서 채택한 선택사항을 충족해야 합니다. 그 중에서도 가장 중요한 요구사항은 **OTT 사이트의 인기순위를 가져와 렌더링**하는 것입니다. 이 점에서 다른 프로젝트와 차별화될 예정입니다.



### 필수 사항

- [ ]  영화 데이터
- [ ]  영화 추천 알고리즘
- [ ]  API
- [ ]  커뮤니티
- [ ]  README
- [ ]  기타

### **목표 구현 사항**

- [ ]  OTT 사이트 인기순위 가져와서 렌더링
- [ ]  애니메이션 효과를 이용한 재미

# 스케줄

이 프로젝트의 예상 완료 일은 **2023년 05월 26일** 입니다. 다음은 중요한 일정들입니다.

- 2023/05/17 (수)
  - 회의를 통한 프로젝트의 방향성 및 전체적 디자인과 기능 선정
  - 프로젝트 구상 및 기획
- 2023/05/18 (목)
  - 와이어프레임 작성
  - ERD 작성 및 백엔드 업무 시작.
- 2023/05/19 (금)
  - 백엔드 movies, accounts, community 개발
  - 영화데이터 가져와서 적용
  - 소셜 로그인 구현 시도 및 실패?
- 2023/05/20 (토)
  - 백엔드 movies, accounts, community 개발
  - 영화데이터 json 파일 자동 생성
  - 프론트 개발
- 2023/05/21 (일)
  - 디테일한 프론트 구상 및 개발
- 2023/05/22 (월)
  - 프론트 개발
  - 메인페이지, 디테일, 커뮤니티
- 2023/05/23 (화)
  - 프론트 개발
  - Ott 사이트 인기 순위 크롤링 및 적용
- 2023/05/24 (수)
  - Ott 사이트 인기순위 크롤링 및 적용

# 팀 구성 및 업무 분담 내역


서정희
프론트엔드:
컴포넌트 구조 설계
레이아웃 구상
웹 디자인 전반


백엔드:
크롤링을 통한 데이터 수집
Ott 차트 가져오기,
현재 상영작과 상영 예정작 구현
좋아요, 댓글 구현

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

성제현
프론트엔드:
UI, UX, 로고 디자인
검색페이지, 디테일페이지

백엔드:
Database설계 및 데이터 소스 구축
CRUD 구현
추천 알고리즘 구현
API 설계

# ERD 와이어 프레임
![Untitled (1)](https://github.com/protofu/HANAVIE/assets/118592515/c717d0e2-c076-4885-8797-aef43c749148)
![Untitled (2)](https://github.com/protofu/HANAVIE/assets/118592515/0767f938-0bce-4874-b239-8ff08ca80a26)
![Untitled (3)](https://github.com/protofu/HANAVIE/assets/118592515/0b22eb72-fc6b-4b7a-96e1-0ad63a241971)


# 초기 logo
![Untitled (4)](https://github.com/protofu/HANAVIE/assets/118592515/f8332cd2-b543-497c-9d76-86828c4643b1)


# 초기 구상

### 기본 틀
- 왼쪽과 윗쪽에 네브바를 배치하고 최소한의 버튼만을 장착

### 메인페이지
![Untitled (7)](https://github.com/protofu/HANAVIE/assets/118592515/2a38bd20-f33b-4995-9bb7-2ea707e99214)

- 메인 페이지의 가장 큰 화면으로 캐러샐 형식의 영화와 줄거리가 적힌 장면들이 넘어감
- 아래로는 추천하는 영화들의 포스터를 게시, 여러가지 예정
- 포스터 클릭시 디테일 페이지로 이동

### 디테일 페이지
![Untitled (8)](https://github.com/protofu/HANAVIE/assets/118592515/9f0fda79-fd35-4567-8f3a-93f8613edd88)

- 영화의 디테일 페이지, 제목 줄거리가 주된 내용
- 유저에 따라 좋아요 리뷰기능도 탑재 예정
- 아래로는 비슷한 영화를 포스터 렌더링 형식으로 소개
- (추가적 선택적) 관련된 영상도 해볼 예정

### 검색 페이지

![Untitled (9)](https://github.com/protofu/HANAVIE/assets/118592515/850bf749-1a77-4f6f-ac43-9c6307b512fa)

- 검색기능 추가
- 아래쪽으로는 랜덤한 영화 포스터를 나열
- 검색시 해당 영화의 포스터 나열
- 만약 분노의 질주 검색시 “분노” 를 검색했을때 단어가 들어간 영화 모두 나열
- 포스터를 누르면 디테일 페이지로 이동

### 커뮤니티 페이지

![Untitled (10)](https://github.com/protofu/HANAVIE/assets/118592515/7c73ba41-4863-480a-9d0a-7e4dc72cde3e)

![Untitled (11)](https://github.com/protofu/HANAVIE/assets/118592515/c14428f1-620d-486c-936e-9bcd905c85c2)

- 커뮤니티 게시판 기능, 간단한 글 및 댓글 기능 가능
- 작성 시 제목, 작성자, 날짜가 페이지에 게시됨
- 글 클릭시 게시글 디테일로 이동
- 게시글 디테일에서 아이디 클릭시 그사람의 프로필로 이동

### 프로필 페이지

- 프로필 페이지는 2가지로 나뉨. 자신의 프로필, 다른사람의 프로필
- 자신의 프로필은 프로필사진, 팔로우, 팔로잉, 좋아요, 좋아요한 영화, 리뷰한 영화가 나타날 예정
- 다른사람의 프로필도 동일하지만 프로필 사진은 바꾸지 못하고 팔로우 버튼이 추가됨
- 팔로우 혹은 팔로잉을 누를 시 팔로우 중인 목록이 뜸

### 로그인 페이지

- 단순한 로그인 페이지
- 로그인 창에는 회원가입 권유 버튼이 있고
- 회원가입 창에는 잘못 눌렀을 사람을 대비해 로그인 권유 버튼이 있다.
- 회원가입에는 비밀번호확인 창이 더 있다

### OTT 사이트 영화 순위 페이지

![Untitled (14)](https://github.com/protofu/HANAVIE/assets/118592515/baeb4df9-b12e-442d-8488-ef6684d06350)


- OTT사이트의 순위를 보여주는 페이지
- 파란색 버튼들은 각각의 OTT 사이트 명이 적혀있다.
- 버튼을 누르면 그 사이트의 인기순위를 보여준다.
- 인기순위에 특정 포스터에 마우스를 가져가면 오른쪽에 포스터가 뜨고
- 각 사이트로 이동버튼이 나온다

# 추천 알고리즘

위 코드는 영화 추천 알고리즘의 일부입니다. 이 알고리즘은 사용자가 좋아하는 영화를 기반으로 다른 비슷한 장르의 영화를 추천합니다.

[리뷰 기반]

사용자가 좋아하는 영화 (`like_movies`)를 입력 받아 해당 영화들의 장르를 분석하여 그 중 첫번째 장르를 추출합니다. 이후, 해당 장르와 동일한 장르를 가진 영화를 데이터베이스에서 찾아 추천 리스트에 추가합니다. 추천 리스트가 30개 미만일 경우, 인기도가 높은 순으로 나머지 영화를 채워넣습니다.

이 알고리즘은 사용자가 선호하는 장르와 유사한 영화를 추천하며, 데이터베이스 내 모든 영화를 다루기 때문에 다양한 영화를 추천할 수 있습니다.

[좋아요기반]

이 코드는 사용자가 좋아하는 영화 목록을 가져와서 각 영화의 장르를 추출합니다. 그런 다음, 좋아하는 영화 중 가장 많이 나타난 상위 3개 장르를 결정하고 이를 기반으로 데이터베이스에서 이와 유사한 장르를 가진 영화를 추천합니다. 추천 영화는 인기도 순으로 정렬되며 상위 30개가 반환됩니다. 이 코드는 시리얼라이저를 포함하여 추천 영화와 사용자가 좋아하는 영화를 JSON 데이터로 변환하여 HTTP 응답으로 반환합니다.

```python
my_movies = []
    User = request.user
    my_genres = {}
    my_movies = User.like_movies.all()
    
    if my_movies:
        for movie in my_movies:
            genres = movie.genres.all()
            for genre in genres:
                if genre.pk in my_genres:
                    my_genres[genre.pk] += 1
                else:
                    my_genres[genre.pk] = 1

        my_genres = sorted(my_genres, key=lambda x: my_genres[x])[:3]
        movies = get_list_or_404(Movie)
        recommendations_list = set()
        for my_genre in my_genres:
            for movie in movies:
                genres = movie.genres.all()
                for genre in genres:
                    if genre.pk == my_genre:
                        recommendations_list.add(movie)
                        break
        recommendations_list = list(recommendations_list)
        recommendations = sorted(recommendations_list, key=lambda x: x.popularity, reverse=True)[:30]
        serializer4 = MovieSerializer(recommendations, many=True)
        serializer3 = MovieSerializer(users_movies, many=True)
        return Response([serializer1.data, serializer2.data, serializer3.data, serializer4.data])
    else:
        serializer3 = MovieSerializer(users_movies, many=True)
        return Response([serializer1.data, serializer2.data, serializer3.data, []])
```

[recommended]

1. 먼저, 사용자가 인증되어 있는지 확인합니다. 사용자가 인증되어 있지 않은 경우, 응답(Response)으로 보낼 추천 영화 목록을 생성하지 않고 알고리즘을 종료합니다.
2. 사용자가 인증되어 있는 경우, 모든 영화 목록을 가져옵니다.
3. 요청(request)에서 현재 사용자를 가져옵니다.
4. 사용자가 좋아하는 영화 목록을 **`my_movies`**에 저장합니다.
5. 좋아하는 영화 목록이 비어있지 않은 경우, 다음 작업을 수행합니다.
   - 좋아하는 영화 목록에서 각 영화의 장르를 확인하고, 장르별로 등장한 횟수를 **`my_genres`** 사전에 저장합니다.
   - **`my_genres`**를 등장 횟수를 기준으로 정렬하고 상위 3개의 장르만 선택합니다.
   - 추천할 영화 목록을 담을 빈 집합(set)인 **`recommendations_list`**를 생성합니다.
   - 각 선택된 장르에 대해 모든 영화를 반복하면서 해당 장르에 속하는 영화를 **`recommendations_list`**에 추가합니다.
   - **`recommendations_list`**에서 20개의 영화를 무작위로 선택합니다.
   - 선택된 영화들을 직렬화하여 **`serializer`**에 저장합니다.
6. 좋아하는 영화 목록이 비어있는 경우, 다음 작업을 수행합니다.
   - 모든 영화 목록을 가져옵니다.
   - 모든 영화에서 20개의 영화를 무작위로 선택합니다.
   - 선택된 영화들을 직렬화하여 **`serializer`**에 저장합니다.
7. **`serializer`**에 저장된 추천 영화 목록을 응답(Response)으로 반환합니다.

위 알고리즘은 사용자가 인증되어 있는지 여부에 따라 다른 추천 영화 목록을 생성하여 반환합니다. 좋아하는 영화 목록이 있는 경우 해당 장르를 기반으로 추천을 수행하고, 좋아하는 영화 목록이 없는 경우 모든 영화를 대상으로 무작위로 추천을 수행합니다.





# 최종로고
![logo](https://github.com/protofu/HANAVIE/assets/118592515/9ebf1936-d517-4df8-ba95-912aaeabe9e7)

# 최종 진행 과정
![Image Pasted at 2023-5-26 09-50](https://github.com/protofu/HANAVIE/assets/118592515/def30f08-c04a-434e-b4a2-3f8ac153f260)

# 최종 사이트

 - 메인페이지
 - 
![image](https://github.com/protofu/HANAVIE/assets/118592515/cdee6a86-f285-4947-ba86-3ad7fd856336)
![image](https://github.com/protofu/HANAVIE/assets/118592515/ab20fdc6-f93e-48d1-9d55-38f467e7eaa1)


- 알고리즘에 의한 추천
- 
![image](https://github.com/protofu/HANAVIE/assets/118592515/64026c43-6c7f-4012-b77a-3caa48088b65)


- 디테일 페이지
- 
![image](https://github.com/protofu/HANAVIE/assets/118592515/1902aa39-2eec-4aa3-9917-05435c102646)
![image](https://github.com/protofu/HANAVIE/assets/118592515/cfa8600d-f644-4e46-b6ec-67a438add360)


- 검색

![image](https://github.com/protofu/HANAVIE/assets/118592515/11d93e0a-581a-4f07-8d73-e2bbc66e1aea)


- 프로필

![image](https://github.com/protofu/HANAVIE/assets/118592515/be17bd74-e4b6-4b98-aba3-a4dceb7c6733)

- 상영중인 영화 페이지

![image](https://github.com/protofu/HANAVIE/assets/118592515/bf4492ed-5741-440c-979e-fbb3ace5ab95)


- 상영 예정
 
![image](https://github.com/protofu/HANAVIE/assets/118592515/df0d394c-5b98-4c40-9805-5f6c41e3d577)


- ott
 
![image](https://github.com/protofu/HANAVIE/assets/118592515/95d39fc0-0e36-480c-9b3f-6f90411c46ad)



# 후기 및 느낀점
![image](https://github.com/protofu/HANAVIE/assets/118592515/fbfce6fb-3763-4770-b341-e28621616c93)


- 제현

초기 기획이 부족했던 부분은 프로젝트 초중반이 아니라 중후반에 나왔습니다.
기획이 부족하니 진행이 어수선해지고 그에 따라 코드 구현도 조금 어수선한 느낌이 들었습니다.
앞으로는 기획에 많은 시간을 써야할 것 같습니다.



- 정희

지난 몇 달간 배운 것보다, 이번 일주일 간 프로젝트를 진행하며 얻은 것들이 훨씬 많은 것 같다. 지금까지 학습한 내용을 한번에 정리할 수 있는 시간이었고, 수업시간에 배우지 않았던 내용들도 혼자 학습해서 구현했을 때 아주 뿌듯했다.
