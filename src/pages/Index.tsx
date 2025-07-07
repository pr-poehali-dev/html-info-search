import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const searchCategories = [
    {
      id: "phone",
      label: "Поиск по номеру",
      icon: "Phone",
      color: "bg-red-500",
    },
    {
      id: "nickname",
      label: "Поиск по никнейму",
      icon: "User",
      color: "bg-red-500",
    },
    {
      id: "discord",
      label: "Discord аккаунт",
      icon: "MessageCircle",
      color: "bg-indigo-500",
    },
    {
      id: "telegram",
      label: "Telegram аккаунт",
      icon: "Send",
      color: "bg-blue-500",
    },
    {
      id: "fullname",
      label: "Поиск по ФИО",
      icon: "UserCheck",
      color: "bg-green-500",
    },
    {
      id: "logs",
      label: "Поиск по логам",
      icon: "FileText",
      color: "bg-yellow-500",
    },
    {
      id: "stealer",
      label: "Поиск по стиллеру",
      icon: "Shield",
      color: "bg-orange-500",
    },
    {
      id: "doxbin",
      label: "Doxbin аккаунт",
      icon: "Database",
      color: "bg-purple-500",
    },
  ];

  const handleSearch = () => {
    if (searchQuery.trim() && selectedCategory) {
      // Placeholder for search functionality
      console.log(
        `Searching for: ${searchQuery} in category: ${selectedCategory}`,
      );
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.poehali.dev/files/4961a12e-4553-47dd-a74a-e93f8ac64067.jpg"
                alt="Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  PODZHIGATEL
                </h1>
                <p className="text-sm text-muted-foreground">
                  Advanced Search Engine
                </p>
              </div>
            </div>

            <nav className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Icon name="Settings" size={16} />
                    Настройки
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Настройки поиска</SheetTitle>
                    <SheetDescription>
                      Настройте параметры поиска для лучших результатов
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Глубина поиска
                      </label>
                      <select className="w-full p-2 bg-card border border-border rounded-md">
                        <option>Поверхностный</option>
                        <option>Глубокий</option>
                        <option>Максимальный</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Источники данных
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">Открытые базы</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">Социальные сети</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" />
                          <span className="text-sm">Утечки данных</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Icon name="Mail" size={16} />
                    Контакты
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Контакты</SheetTitle>
                    <SheetDescription>
                      Свяжитесь с нами для получения поддержки
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Техническая поддержка:
                      </p>
                      <p className="text-sm font-mono bg-card p-2 rounded border">
                        support@podzhigatel.com
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Telegram:</p>
                      <p className="text-sm font-mono bg-card p-2 rounded border">
                        @podzhigatel_support
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Discord:</p>
                      <p className="text-sm font-mono bg-card p-2 rounded border">
                        PODZHIGATEL#1337
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Icon name="HelpCircle" size={16} />
                    Помощь
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Помощь</SheetTitle>
                    <SheetDescription>
                      Руководство по использованию сервиса
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Как искать:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Выберите категорию поиска</li>
                        <li>• Введите запрос в поле поиска</li>
                        <li>• Нажмите кнопку "Поиск"</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Типы поиска:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Номер телефона: +7XXXXXXXXXX</li>
                        <li>• Никнейм: username</li>
                        <li>• ФИО: Иванов Иван Иванович</li>
                        <li>• ID аккаунта: 123456789</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Ограничения:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Максимум 10 запросов в час</li>
                        <li>• Только легальные данные</li>
                        <li>• Соблюдение конфиденциальности</li>
                      </ul>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-foreground">
              Поиск информации
            </h2>
            <p className="text-muted-foreground">
              Выберите тип поиска и введите запрос
            </p>
          </div>

          {/* Search Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {searchCategories.map((category) => (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all hover:scale-105 ${
                  selectedCategory === category.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => handleCategorySelect(category.id)}
              >
                <CardContent className="p-4 text-center">
                  <div
                    className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-3`}
                  >
                    <Icon
                      name={category.icon}
                      size={20}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-foreground">
                    {category.label}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Search Input */}
          <div className="mb-8">
            <div className="flex gap-2">
              <Input
                placeholder="Введите запрос для поиска..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-lg py-6"
                disabled={!selectedCategory}
              />
              <Button
                onClick={handleSearch}
                disabled={!searchQuery.trim() || !selectedCategory}
                className="px-8 py-6"
              >
                <Icon name="Search" size={20} />
                Поиск
              </Button>
            </div>
            {selectedCategory && (
              <div className="mt-2">
                <Badge variant="secondary">
                  Выбрана категория:{" "}
                  {
                    searchCategories.find((c) => c.id === selectedCategory)
                      ?.label
                  }
                </Badge>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Database" size={20} />
                  Результаты поиска
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!searchQuery || !selectedCategory ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Icon
                      name="Search"
                      size={48}
                      className="mx-auto mb-4 opacity-50"
                    />
                    <p>Выберите категорию и введите запрос для начала поиска</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Info" size={16} />
                      <span>
                        Поиск выполняется по категории:{" "}
                        {
                          searchCategories.find(
                            (c) => c.id === selectedCategory,
                          )?.label
                        }
                      </span>
                    </div>

                    {/* Sample results */}
                    <div className="space-y-3">
                      <div className="p-4 bg-card border border-border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            Найдено
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            База данных #1
                          </span>
                        </div>
                        <p className="text-sm">
                          Результаты поиска будут отображаться здесь...
                        </p>
                      </div>

                      <div className="p-4 bg-card border border-border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            Найдено
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            База данных #2
                          </span>
                        </div>
                        <p className="text-sm">Дополнительная информация...</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Все данные получены из открытых источников
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 PODZHIGATEL. Innocent unless you're caught.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
