function skillsMember() {
  var member = document.getElementById('member');
  var memberSkills = document.getElementById('member-skills');
  var memberSkillsClose = document.getElementById('member-skills-close');

  member.addEventListener('click', function() {
    memberSkills.classList.add('active');
  });

  memberSkillsClose.addEventListener('click', function() {
    memberSkills.classList.remove('active');
  });
}