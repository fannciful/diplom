import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GlassButton } from "@/components/GlassButton";
import { GraduationCap } from "lucide-react";

const facultyData: Record<string, { specialties: string[]; departments: string[] }> = {
    "Біологічний факультет": {
        specialties: [
            "Біологія та біохімія", 
            "Біотехнології та біоінженерії",
            "Екологія",
            "Середня освіта (Біологія та здоровʼя людини)",
        ],
        departments: [
            "біофізики та біоінформатики",
            "біохімії",
            "ботаніки",
            "генетики та біотехнології",
            "зоології та екології тварин",
            "мікробіології",
            "фізіології людини та тварин",
            "фізіології та екології рослин",
            "екології",
        ],
    },
    "Географічний факультет": {
        specialties: [
            "Географія", 
            "Готельно-ресторанна справа",
            "Науки про Землю",
            "Середня освіта (Географія)",
            "Технології захисту навколишнього середовища", 
            "Туризм і рекреація",
            "Харчові технології",
        ],
        departments: [
            "географії України",
            "геоморфології і палеографії",
            "ґрунтознавства і географії ґрунтів",
            "економічної і соціальної географії",
            "конструктивної географії та картографії",
            "раціонального використання природних ресурсів і охорони природи",
            "туризму",
            "фізичної географії",
        ],
    },
    "Геологічний факультет": {
        specialties: [
            "Науки про Землю", 
        ],
        departments: [
            "геології корисних копалин і геофізики",
            "екологічної та інженерної геології і гідрогеології",
            "загальної та історичної геології і палеонтології",
            "мінералогіїї, петрографії і геохімії",
        ],
    },
    "Економічний факультет": {
        specialties: [
            "Економіка", 
            "Маркетинг",
            "Менеджмент",
            "Облік і оподаткування",
            "Підприємництво і торгівля", 
            "Соціальне забезпечення",
            "Фінанси, банківська справа, страхування та фондовий ринок",
        ],
        departments: [
            "аналітичної економії і міжнародної економіки",
            "банківського і страхового бізнесу",
            "економічної кібернетики",
            "економіки України",
            "інформаційниї систем в менеджменті",
            "маркетингу",
            "менеджменту",
            "обліку і аудиту",
            "статистики",
            "фінансів, грошового обліку і кредиту",
        ],
    },
    "Факультет електроніки та компʼютерних технологій": {
        specialties: [
            "Інженерія програмного забезпечення", 
            "Компʼютерні науки",
            "Інформаційні системи та технології",
            "Електроніки та компʼютерні системи",
            "Сенсорні і діагностичні електронні системи", 
            "Мікро- та наносистемна техніка",
        ],
        departments: [
            "оптоелектроніки та інформаційних технологій",
            "радіоелектронних і компʼютерних систем",
            "радіофізики та компʼютерних технологій",
            "системного проектування",
            "сенсорної та напівпровідникової електроніки",
            "фізичної і біомедичної електроніки",
        ],
    },
    "Факультет журналістики": {
        specialties: [
            "Журналістика", 
            "Журналістика/Міжнародна журналістика",
        ],
        departments: [
            "зарубіжної преси та інформації",
            "мови засобів масової інформації",
            "української преси",
        ],
    },
    "Факультет іноземних мов": {
        specialties: [
            "Філологія", 
        ],
        departments: [
            "англійської філології",
            "класичної філології",
            "німецької філології",
            "світової літератури",
            "французької та іспанської філології",
            "міжкультурної комунікації та перекладу",
        ],
    },
    "Історичний факультет": {
        specialties: [
            "Історія та археологія", 
            "Музеєзнавство, памʼяткознавство",
            "Середня освіта (Історія та громадянська освіта)",
            "Соціологія",
        ],
        departments: [
            "новітньої історії України",
            "давньої історії України та архівознавства",
            "історії середніх віків та візантиністики",
            "нової та новітньої історії",
            "історії словʼянських країн",
            "етнології",
            "історичного краєзнавства",
            "арехології та історії стародавнього світу",
            "соціології",
        ],
    },
    "Факультет культури і мистецтв": {
        specialties: [
            "Інформаційна, бібліотечна та архівна справа", 
            "Менеджмент соціокультурної діяльності",
            "Музичне мистецтво",
            "Середня освіта (музичне мистецтво)",
            "Сценічне мистецтво", 
            "Хореографія",
        ],
        departments: [
            "музичне мистецтво",
            "режисури та хореографії",
            "соціокультурного менеджменту",
            "театрознавства та акторської майстерності",
        ],
    },
    "Механіко-математичний факультет": {
        specialties: [
            "Математика", 
            "Прикладна математика",
            "Середня освіта (математика)",
            "Статистика",
        ],
        departments: [
            "алгебри та логіки",
            "геометрії та топології",
            "диференціальних рівнянь",
            "математичної економіки і економетрії",
            "математичного моделювання",
            "математчного і функціонального аналізу",
            "теорії функцій і теорії ймовірностей",
            "теортичної та прикладної статистики",
            "механіки",
            "вищої математики"
        ],
    },
    "Факультет міжнародних відносин": {
        specialties: [
            "Міжнародне право", 
            "Міжнародні відносини, суспільні комунікації та регіональні студії",
            "Міжнародні економічні відносини",
        ],
        departments: [
            "міжнародного права",
            "міжнародних економічних відносин",
            "іноземних мов факультету міжнародних відносин",
            "країнознавства і міжнародного туризму",
            "міжнародних відносин і дипломатичної служби",
            "міжнародного економічного аналізу і фінансів",
            "європейського права",
        ],
    },
    "Факультет педагогічної освіти": {
        specialties: [
            "Дошкільна освіта", 
            "Початкова освіта",
            "Початкова освіта. Англійська мова у початковій школі",
            "Початкова освіта. Інформатика у початковій школі",
            "Спеціальна освіта. Логопедія",
            "Спеціальна освіта. Корекційна психопедагогіка",
            "Соціальна робота",
        ],
        departments: [
            "загальної педагогіки та педагогіки вищої школи",
            "початкової та дошкільної освіти",
            "соціальної педагогіки та соціальної роботи",
            "соціальної освіти",
            "фізичного виховання та спорту",
        ],
    },
    "Факультет прикладної математики та інформатики": {
        specialties: [
            "Кібербезпека та захист інформації", 
            "Компʼютерні науки",
            "Прикладна математика",
            "Середня освіта (Інформатика)",
            "Системний аналіз",
        ],
        departments: [
            "обчислювальної математики",
            "прикладної математики",
            "теорії оптимальних процесів",
            "програмування",
            "інформаційних систем",
            "математичного моделювання соціально-економічних процесів",
            "дискретного аналізу та інтелектуальних систем",
            "кібербезпеки",
        ],
    },
    "Факультет управління фінансами та бізнесу": {
        specialties: [
            "Економіка", 
            "Облік і оподаткування",
            "Публічне управління та адміністрування",
            "Фінанси, банківська справа, страхування та фондовий ринок",
        ],
        departments: [
            "економіки та публічного управління",
            "обліку, аналізу і контролю",
            "публічного адміністрування та управління бізнесом",
            "фінансових технологій та консалтингу",
            "фінансового менеджменту",
            "цифрової економіки та бізнес-аналітики",
        ],
    },
    "Фізичний факультет": {
        specialties: [
            "Прикладна фізика та наноматеріали", 
            "Середня освіта (фізика та астрономія)",
            "Фізика та астрономія",
        ],
        departments: [
            "астрофізики",
            "експериментальної фізики",
            "загальної фізики",
            "фізики металів",
        ],
    },
    "Філологічний факультет": {
        specialties: [
            "Середня освіта (Українська мова і література)", 
            "Філологія",
        ],
        departments: [
            "загального мовознавства",
            "польської філології",
            "словʼянської філології",
            "сходознавства",
            "української літератури",
        ],
    },
    "Філософський факультет": {
        specialties: [
            "Культурологія", 
            "Політологія",
            "Психологія",
            "Філософія",
        ],
        departments: [
            "історії філософії",
            "політології",
            "психології",
            "теорії та історії культури",
            "теорії та історії політичної науки",
            "філософії",
        ],
    },
    "Хімічний факультет": {
        specialties: [
            "Хімія", 
        ],
        departments: [
            "аналітичної хімії",
            "органічної хімії",
            "неорганічної хімії",
        ],
    },
    "Юридичний факультет": {
        specialties: [
            "Право", 
        ],
        departments: [
            "адміністративного та фінансового права",
            "конституційного права",
            "кримінального процесу і криміналістики",
            "соціального права",
            "цивільного права та процесу",
        ],
    },
};

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const specialties = selectedFaculty
    ? facultyData[selectedFaculty]?.specialties || []
    : [];
  const departments = selectedFaculty
    ? facultyData[selectedFaculty]?.departments || []
    : [];

  const handleSubmit = () => {
    const formData = {
      firstName,
      lastName,
      email,
      password,
      faculty: selectedFaculty,
      specialty: selectedSpecialty,
      department: selectedDepartment,
    };
    console.log("Form Data:", formData);
    alert("Реєстрація успішна ✅");
  };

  return (
    <div className="min-h-screen bg-[#0e0f11] flex items-center justify-center px-4 py-12 relative overflow-hidden ">
      {/* Blur Backgrounds */}
      <div className="absolute top-[-120px] right-[-80px] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-[-100px] left-[-80px] w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] z-0" />

      <div className="w-full max-w-3xl z-10">
        <Card className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-md transition-all duration-300 hover:shadow-blue-500/20 hover:scale-[1.01] transition-all duration-300">
          <CardHeader className="text-center">
            <div className="mx-auto w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4">
              <GraduationCap className="w-7 h-7 text-white/80" />
            </div>
            <CardTitle className="text-xl font-semibold text-white">
              Реєстрація студента
            </CardTitle>
          </CardHeader>

          <CardContent className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Імʼя */}
              <div>
                <Label className="text-white/80 mb-1 block">Імʼя</Label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Введіть імʼя"
                  className="w-full bg-white/10 border border-white/10 text-white/90 rounded-md px-3 py-2 outline-none placeholder:text-white/50"
                />
              </div>

              {/* Прізвище */}
              <div>
                <Label className="text-white/80 mb-1 block">Прізвище</Label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Введіть прізвище"
                  className="w-full bg-white/10 border border-white/10 text-white/90 rounded-md px-3 py-2 outline-none placeholder:text-white/50"
                />
              </div>

              {/* Email */}
              <div>
                <Label className="text-white/80 mb-1 block">Email</Label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@lnu.edu.ua"
                  className="w-full bg-white/10 border border-white/10 text-white/90 rounded-md px-3 py-2 outline-none placeholder:text-white/50"
                />
              </div>

              {/* Пароль */}
              <div>
                <Label className="text-white/80 mb-1 block">Пароль</Label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введіть пароль"
                  className="w-full bg-white/10 border border-white/10 text-white/90 rounded-md px-3 py-2 outline-none placeholder:text-white/50"
                />
              </div>

              {/* Факультет */}
              <div>
                <Label className="text-white/80 mb-1 block">Факультет</Label>
                <Select
                  onValueChange={(value) => {
                    setSelectedFaculty(value);
                    setSelectedSpecialty("");
                    setSelectedDepartment("");
                  }}
                >
                  <SelectTrigger className="w-full bg-white/10 border border-white/10 text-white/90">
                    <SelectValue placeholder="Оберіть факультет" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(facultyData).map((faculty) => (
                      <SelectItem key={faculty} value={faculty}>
                        {faculty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Спеціальність */}
              <div>
                <Label className="text-white/80 mb-1 block">Спеціальність</Label>
                <Select
                  onValueChange={(value) => setSelectedSpecialty(value)}
                  disabled={!selectedFaculty}
                >
                  <SelectTrigger className="w-full bg-white/10 border border-white/10 text-white/90">
                    <SelectValue placeholder="Оберіть спеціальність" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty} value={specialty}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Кафедра */}
              <div className="md:col-span-2">
                <Label className="text-white/80 mb-1 block">Кафедра</Label>
                <Select
                  onValueChange={(value) => setSelectedDepartment(value)}
                  disabled={!selectedFaculty}
                >
                  <SelectTrigger className="w-full bg-white/10 border border-white/10 text-white/90">
                    <SelectValue placeholder="Оберіть кафедру" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((department) => (
                      <SelectItem key={department} value={department}>
                        {department}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Кнопка */}
            <GlassButton
              className="w-full mt-8 text-sm py-2"
              variant="primary"
              onClick={handleSubmit}
            >
              Зареєструватися
            </GlassButton>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;